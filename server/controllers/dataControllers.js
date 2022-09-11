const ApiError = require('../error/ApiError');
const { Review, BlogCards } = require('../models/models');
const { google } = require('googleapis');
const nodemailer = require('nodemailer');
const config = require('./nodemailer/config.js');
const OAuth2 = google.auth.OAuth2;
const OAuth2_client = new OAuth2(config.clientId, config.clientSecret);
OAuth2_client.setCredentials({ refresh_token: config.refreshToken });
const accesToken = OAuth2_client.getAccessToken();

let transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    type: 'OAuth2',
    user: config.user,
    clientId: config.clientId,
    clientSecret: config.clientSecret,
    refreshToken: config.refreshToken,
    accessToken: accesToken,
  },
  tls: {
    rejectUnauthorized: false,
  },
});

class DataController {
  async consultation(req, res, next) {
    const { email, name } = req.body;
    console.log(email, name);
    if (email && name) {
      let mailOptions = {
        from: 'uvedomitel1@gmail.com',
        to: 'romanyakovenko31@gmail.com',
        subject: 'ЗАПИСЬ НА КОНСУЛЬТАЦИЮ',
        text: `Новая запись на консультацию, контакты: имя ${name}, связь ${email}`,
      };
      transporter.sendMail(mailOptions, (err, succes) => {
        if (err) console.log(err);
        else console.log('succes');
      });
      return res.status(200).json({ status: 'ok' });
    } else {
      return res.status(404).json({ status: 'bad' });
    }
  }

  async getReviews(req, res, next) {
    const { limit } = req.query;
    let reviews;
    if (limit) {
      reviews = await Review.findAll({
        limit: limit,
        where: {
          status: true,
        },
      });
    } else {
      reviews = await Review.findAll({
        where: {
          status: true,
        },
      });
    }
    return res.json(reviews);
  }

  async sendReview(req, res, next) {
    const { rating, name, text, status, email } = req.body;
    const today = new Date();
    const day = today.getDate();
    const month = today.getMonth() + 1;
    const year = today.getFullYear();
    const todayDate = `${day > 9 ? day : '0' + day}.${
      month > 9 ? month : '0' + month
    }.${year}`;
    const newReview = await Review.create({
      rating,
      name,
      text,
      date: todayDate,
      status: false,
      email,
    });
    return res.json(newReview);
  }

  async updateReviewStatus(req, res, next) {
    const { id } = req.body;
    console.log(id);
    await Review.update({ status: true }, { where: { id } });
    return res.status(200).json({ status: 'ok' });
  }

  async deleteReview(req, res, next) {
    const { id } = req.body;
    const review = await Review.destroy({ where: { id } });
    return res.status(200).json({ status: 'ok' });
  }

  async getBlogCards(req, res, next) {
    const data = await BlogCards.findAll();
    return res.json(data);
  }

  async getAnotherBlog(req, res, next) {
    const allCards = await BlogCards.findAll();
    const bestCards = allCards
      .sort((a, b) => a.likes.length - b.likes.length)
      .slice(allCards.length - 3, allCards.length);
    return res.json({ anotherBlogs: bestCards });
  }

  async getCardsById(req, res, next) {
    const { id } = req.params;
    const blog = await BlogCards.findOne({ where: { id } });
    return res.json(blog);
  }

  async sendReaction(req, res, next) {
    const { id } = req.params;
    const { like, dislike } = req.body;
    const blog = await BlogCards.findOne({ where: { id } });
    if (like) {
      blog.update({
        ['likes']: [...blog.likes, like],
      });
    }
    if (dislike) {
      blog.update({
        ['dislikes']: [...blog.dislikes, dislike],
      });
    }
    return res.json(blog);
  }

  async sendComment(req, res, next) {
    const { comment } = req.body;
    const { id } = req.params;
    const blog = await BlogCards.findOne({ where: { id } });
    blog.update({
      ['comments']: [...blog.comments, comment],
    });
    return res.json(blog);
  }
  async auth(req, res, next) {
    const { login, password } = req.body;
    if (login === 'root' && password === 'LVg=F#kN|U7n')
      return res.json({
        status: 200,
        token: 'welcome23425dfHHgDFJAFadvokat3756GFGF^%Rfytetoyour panel',
      });
    return res.json({ message: 'premission deny' });
  }
  async createPost(req, res, next) {
    const { image, title, text } = req.body;
    const today = new Date();
    const day = today.getDate();
    const month = today.getMonth() + 1;
    const year = today.getFullYear();
    const todayDate = `${day > 9 ? day : '0' + day}.${
      month > 9 ? month : '0' + month
    }.${year}`;
    const post = await BlogCards.create({
      image,
      title,
      text,
      time: todayDate,
      likes: [],
      dislikes: [],
      comments: [],
    });
    return res.json(post);
  }
}

module.exports = new DataController();
