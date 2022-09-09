const Router = require('express');
const router = new Router();
const DataController = require('../controllers/dataControllers');
// запросы
router.get('/blogs', DataController.getBlogCards);
router.get('/reviews', DataController.getReviews);
router.post('/reviews', DataController.sendReview);
router.patch('/reviews', DataController.updateReviewStatus);
router.delete('/reviews', DataController.deleteReview);
router.get('/another-blog', DataController.getAnotherBlog);
router.post('/article/:id', DataController.sendComment);
router.get('/article/:id', DataController.getCardsById);
router.post('/login', DataController.auth);

module.exports = router;
