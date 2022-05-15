// https://expressjs.com/en
const express = require('express')
const app = express()
const http = require('http').Server(app)
const port = 4000

app.use(express.static('./test'))
http.listen(port, () => console.log(`Listening on port ${port}`))
