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
}

module.exports = new DataController();
