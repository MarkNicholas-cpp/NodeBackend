const express = require('express');
const bodyparser = require('body-parser');
const cors = require('cors');
const Students = require('./Routes/Students');
const Teachers = require('./Routes/Teachers')
const app = express();
app.use(cors());
app.use(bodyparser.urlencoded({ extended :  true}));
app.use(bodyparser.json());
app.use('/Students', Students);
app.use('/Teachers', Teachers);





module.exports = app;
