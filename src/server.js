const express = require('express');
const bodyParser = require('body-parser');
const routes =require('./routes');
const cros = require('cors')

const app = express();

app.use(cros());

app.use(bodyParser.json());

app.use(bodyParser.urlencoded({ extended: false}));

app.use(routes);

app.listen(3001);