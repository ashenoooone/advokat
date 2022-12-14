const Router = require('express');
const router = new Router();
const DataController = require('../controllers/dataControllers');
// запросы
router.get('/blogs', DataController.getBlogCards);
router.get('/reviews', DataController.getReviews);
router.get('/not-confirmed-reviews', DataController.getNotConfirmedReviews);
router.post('/reviews', DataController.sendReview);
router.patch('/reviews', DataController.updateReviewStatus);
router.delete('/reviews', DataController.deleteReview);
router.get('/another-blog/:id', DataController.getAnotherBlog);
router.post('/review-card/:id', DataController.sendReaction);
router.post('/article', DataController.sendComment);
router.get('/comments/:id', DataController.getCommentsById);
router.get('/article/:id', DataController.getCardsById);
router.post('/login', DataController.auth);
router.post('/blogs', DataController.createPost);
router.post('/consultation', DataController.consultation);

module.exports = router;
