const router = require("express").Router();

router.get("/", (_req, res) => {
  return res.send("<h1>hello world</h1>");
});

module.exports = router;
