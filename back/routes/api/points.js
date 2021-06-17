const router = require("express").Router();
const mongoose = require("mongoose");

const Points = require('../../models/Points')

// api routes for points will live here.
router.get('/', (_req, res) => {
  return res.send("<h3>Hello from the points route</h3>")
})

module.exports = router
