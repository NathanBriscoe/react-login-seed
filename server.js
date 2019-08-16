const express = require('express');
const bodyParser = require('body-parser')
const app = express();
const port = process.env.PORT || 3000;
const axios = require('axios');

// Import Path
const path = require('path');

// console.log that your server is up and running
app.listen(port, () => {
    console.log(`Listening on port ${port}`)
});

app.use(bodyParser.json())
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
)

app.get('/', (request, response) => {
    // ToDo: addd axios here
    axios.get(`/`)
      .then(res => {
        const value = res.data;
        this.setState({ value });
      })
    response.json({ info: 'Node.js, Express, and Postgres API' })
  })