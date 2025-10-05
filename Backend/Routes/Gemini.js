const express = require('express');
const router = express.Router();

// Controllers
const getFeedback = require('../Controller/geminiController');


router.post('/gemini', getFeedback);

module.exports = router;