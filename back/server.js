const express = require('express')
const bodyParser = require("body-parser");
const cors = require('cors')
const routes = require("./routes");
const mongoose = require("mongoose")
const db = require('./config/keys').mongoURI

const app = express()

app.use(cors())
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(routes);

mongoose
  .connect(db, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(() => console.log("mongodb connected!"))
  .catch((err) => console.log(err));

const port = process.env.PORT || 5000

app.get('/', (_req, res) => {
  return res.send(`<h3>Hello from server at port ${port}</h3>`);
})

app.listen(port, console.log(`App listening on port: ${port}`))
