const express = require('express');
const app = express();

const bodyParser = require('body-parser'); //using as middleware

//PARSING
app.use(bodyParser.json());

const port = process.env.PORT || 3001;
app.listen(port, () => {
    console.log(`SERVER USING ${port}`);
})