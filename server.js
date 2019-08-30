const express = require('express');
const bodyParser = require('body-parser')
const app = express();
const port = process.env.PORT || 5000;
const axios = require('axios');
const db = require('./src/queries')

app.use(bodyParser.json())
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
)

app.get('/', (request, response) => {
  response.json({ info: 'test' })
  
})

app.post('/user', db.createUser) // how to get this to database

app.listen(port, () => {
  console.log(`App running on port ${port}.`)
})