const express = require('express');
const router = express.Router();

// Controllers
const registerUser = require('../../Controller/registerController');
const loginUser = require('../../Controller/loginController');
const refreshAccessToken = require('../../Controller/refreshTokenController');
const logoutUser = require('../../Controller/logoutController');

router.post('/register', registerUser);
router.post('/login', loginUser);
router.get('/refresh', refreshAccessToken);
router.get('/logout', logoutUser);


module.exports = router;