const express = require('express');
const app = express();
const bodyparser = require('body-parser');
const cors = require('cors');
const Route = require('./Routes/Routes');
app.use(cors());
app.use(bodyparser.urlencoded({ extended :  true}));
app.use(bodyparser.json());
app.use('/', Route)



module.exports = app;
