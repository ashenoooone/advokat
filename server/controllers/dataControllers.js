const ApiError = require('../error/ApiError');

class DataController {
  async getPosts(req, res, next) {
    return res.json('все карточки');
  }
}

module.exports = new DataController();
