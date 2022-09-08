const ApiError = require('../error/ApiError');
const { Review, BlogCards } = require('../models/models');
class DataController {
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
    const { rating, name, text, date, status, email } = req.body;
    const newReview = await Review.create({
      rating,
      name,
      text,
      date,
      status: false,
      email,
    });
    return res.json(newReview);
  }

  async updateReviewStatus(req, res, next) {
    const { id } = req.body;
    console.log(id);
    await Review.update({ status: true }, { where: { id } });
    return res.status(200);
  }

  async deleteReview(req, res, next) {
    const { id } = req.body;
    const review = await Review.destroy({ where: { id } });
    return res.status(200);
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
}

module.exports = new DataController();
