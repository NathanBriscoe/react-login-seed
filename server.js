const express = import('express');
const bodyParser = import('body-parser');
const app = express();
const port = process.env.PORT || 5000;
// const axios = import('axios');
const db = import('./src/queries');

app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);

app.get('/', (request, response) => {
  response.json({ info: 'test' })
  
});

app.post('/user', db.createUser); // how to get this to database

app.listen(port, () => {
  console.log(`App running on port ${port}.`)
});
