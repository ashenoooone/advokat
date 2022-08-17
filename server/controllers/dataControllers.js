const ApiError = require('../error/ApiError');
const { Review } = require('../models/models');
class DataController {
  async getPosts(req, res, next) {
    return res.json('все карточки');
  }
  async getReviews(req, res, next) {
    const { limit } = req.query;
    const reviews = await Review.findAll({ limit: limit });
    return res.json(reviews);
  }
}

module.exports = new DataController();
