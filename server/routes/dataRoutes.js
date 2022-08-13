const Router = require('express');
const router = new Router();
const DataController = require('../controllers/dataController');
// запросы
router.get('/posts', DataController.getPosts);

module.exports = router;
