const ApiError = require('../error/ApiError');
const { Review, BlogCards, Comments } = require('../models/models');
const { google } = require('googleapis');
const nodemailer = require('nodemailer');
const config = require('./nodemailer/config.js');
const OAuth2 = google.auth.OAuth2;
const OAuth2_client = new OAuth2(config.clientId, config.clientSecret);
OAuth2_client.setCredentials({ refresh_token: config.refreshToken });
const accesToken = OAuth2_client.getAccessToken();

const getTodayDate = () => {
  const today = new Date();
  const day = today.getDate();
  const month = today.getMonth() + 1;
  const year = today.getFullYear();
  const todayDate = `${day > 9 ? day : '0' + day}.${
    month > 9 ? month : '0' + month
  }.${year}`;
  return todayDate;
};

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

  async getNotConfirmedReviews(req, res, next) {
    const reviews = await Review.findAll({
      where: {
        status: false,
      },
    });
    return res.json(reviews);
  }

  async sendReview(req, res, next) {
    const { rating, name, text, status, email } = req.body;
    const newReview = await Review.create({
      rating,
      name,
      text,
      date: getTodayDate(),
      status: false,
      email,
    });
    return res.json(newReview);
  }

  async updateReviewStatus(req, res, next) {
    const { id } = req.body;
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
    const { like, dislike, id } = req.body;
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
    const { name, text, email, blogId } = req.body;
    const comment = await Comments.create({
      name,
      text,
      email,
      data: getTodayDate(),
      blogId,
    });
    return res.json(comment);
  }

  async getCommentsById(req, res) {
    const { id } = req.params;
    const comment = await Comments.findOne({ where: { id } });
    return res.json(comment);
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
    const { title, image, text } = req.body;
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
    });
    return res.json(post);
  }
}

module.exports = new DataController();
