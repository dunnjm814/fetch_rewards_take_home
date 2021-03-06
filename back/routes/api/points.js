const router = require("express").Router();
const mongoose = require("mongoose");

const Points = require('../../models/Points')

// api routes for points will live here.
router.get('', (_req, res) => {
  
  Points.find()
    .sort({ timestamp: -1 })
    .then(data => res.json(data))
    .catch(err => {
      console.log(err)
      res.json({nodata: 'no entries found'})
  })
})

router.post('', (req, res) => {
  console.log("req", req.body)
  try {
    const newPointsData = new Points({
      payer: req.body.name,
      points: req.body.points,
      timestamp: req.body.date,
    })

    newPointsData.save()
    .then(data => {res.json(data)})
  } catch(err) {
    return console.log(err)
  }
})

module.exports = router
