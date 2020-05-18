const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const cors = require('cors');
const pool = require('./DB/Postgres.js');

const app = express();
const port = 3000;

app.use(express.static(path.resolve(__dirname, '../public')));
app.use(bodyParser());
app.use(
  bodyParser.urlencoded({
    extended: false,
  })
);

app.use(cors());

app.listen(port, () => {
  console.log(`e-commerse app listening to port ${port}.`);
});
