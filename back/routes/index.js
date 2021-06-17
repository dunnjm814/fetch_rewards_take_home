const express = require('express');
const router = express.Router();
const apiRoute = require('./api')
const path = require('path')

router.use('/api', apiRoute)

router.get('/', (req, res) => {
  return res.write('hello world')
})

module.exports = router
