const express = require('express');
const bodyParser = require('body-parser')
const app = express();
const port = process.env.PORT || 3000;

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
    response.json({ info: 'Node.js, Express, and Postgres API' })
  })