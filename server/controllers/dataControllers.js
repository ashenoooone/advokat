const ApiError = require('../error/ApiError');
const { Review, BlogCards } = require('../models/models');
class DataController {
  async getReviews(req, res, next) {
    const { limit } = req.query;
    const reviews = await Review.findAll({ limit: limit });
    return res.json(reviews);
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
