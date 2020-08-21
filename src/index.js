const express = require('express');
const app = express();
const bodyParser = require('body-parser');

require('./database/index');

app.use(bodyParser.urlencoded({ extended: true }))
 
app.use(bodyParser.json());
app.use('/', require("./routes"));
app.listen(3001);