require('dotenv').config();
const express = require('express');
const app = express();
const index = require('./routes/index.routes');
const bodyParser = require('body-parser');
const cors = require('cors');
const PORT = 8080;

//to cinfigure the body coming with Http Request
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

//configuration to cors
app.use(cors({ origin: '*' }));
//routes
app.use('/', index);

console.log(process.env.PORT);
//start server
const start = async () => {
    app.listen(PORT, async () => {
        console.log(`Server has been started on port ${PORT}`);
    });
};
start();
