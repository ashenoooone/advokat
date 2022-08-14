const ApiError = require('../error/ApiError');

class DataController {
  async getPosts(req, res, next) {
    return res.json('все карточки');
  }
  async getReviews(req, res, next) {}
}

module.exports = new DataController();
