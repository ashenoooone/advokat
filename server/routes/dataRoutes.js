const Router = require('express');
const router = new Router();
const DataController = require('../controllers/dataControllers');
// запросы
router.get('/posts', DataController.getPosts);
router.get('/reviews', DataController.getReviews);

module.exports = router;
