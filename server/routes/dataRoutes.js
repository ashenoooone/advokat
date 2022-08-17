const Router = require('express');
const router = new Router();
const DataController = require('../controllers/dataControllers');
// запросы
router.get('/blogs', DataController.getBlogCards);
router.get('/reviews', DataController.getReviews);

module.exports = router;
