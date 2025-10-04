const express = require('express');
const router = express.Router();

// Controllers
const registerUser = require('../../Controller/registerController');


router.post('/register', registerUser);

module.exports = router;