const Router = require('express');
const router = new Router();
const DataController = require('../controllers/dataControllers');
// запросы
router.get('/blogs', DataController.getBlogCards);
router.get('/reviews', DataController.getReviews);
router.get('/another-blog', DataController.getAnotherBlog);
router.get('/article/:id', DataController.getCardsById);
router.post('/article/:id', DataController.sendComment);

module.exports = router;
