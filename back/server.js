const express = require('express')
const cors = require('cors')

const app = express()

app.use(cors())

const port = process.env.PORT || 5000

app.get('/', (req, res) => {
  return res.send(`<h1>Hello from server at port ${port}</h1>`);
})

app.listen(port, console.log(`App listening on port: ${port}`))
