const express = require('express');
const app = express();
const mongoose = require('mongoose');
require('dotenv').config();

const bodyParser = require('body-parser'); //using as middleware

const mongoUri = `mongodb://${process.env.DB_HOST}`;
mongoose.connect(mongoUri);

//PARSING
app.use(bodyParser.json());

const port = process.env.PORT || 3001;
app.listen(port, () => {
    console.log(`SERVER RUNING ON PORT${port}`);
})