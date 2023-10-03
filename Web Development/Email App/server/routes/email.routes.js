const express = require('express');
const router = express.Router();

const emailController = require('../controller/email.controller')
//routes
router.post('/sendEmail', emailController.sendEmail);

module.exports = router;