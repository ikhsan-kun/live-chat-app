const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(bodyParser.json());

app.get('/', (req, res) => {
  res.send('Welcome to the backend server!');
});

app.listen(3000, () => {
    console.log('Server is running on http://localhost:3000');
});