const express = require('express');
const router = express.Router();
const apiRoute = require('./api')
const path = require('path')

router.use('/api', apiRoute)



module.exports = router
