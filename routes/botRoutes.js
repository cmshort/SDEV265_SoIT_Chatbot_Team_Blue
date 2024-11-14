const { Router } = require('express');
const botController = require('../controllers/botController');

const router = Router();

router.get('/ivybot', botController.response);
router.post('/ivybot', botController.query);

module.exports = router;