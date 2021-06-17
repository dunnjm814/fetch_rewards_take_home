const router = require("express").Router();
const pointsRouter = require('./points')

router.use('/points', pointsRouter)

router.get("/", (_req, res) => {
  return res.send("<h3>Hello from the api</h3>");
});

module.exports = router;
