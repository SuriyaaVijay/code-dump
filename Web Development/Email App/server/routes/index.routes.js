const express = require('express');
const router = express.Router();

const email = require('./email.routes');
//routes
router.use('/email', email);

module.exports = router;