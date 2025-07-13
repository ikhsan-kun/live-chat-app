const express = require('express');
const Authcont = require('../controllers/authController');
const router = express.Router();
const authValidator = require('../validators/authValidator'); 


router.post('/register', authValidator, Authcont.register);
router.post('/login', authValidator, Authcont.login);

module.exports = router;
