const express = require('express');
const app=express();
const {port} = require('./config');
require('./db/mongoose')
const apiRouter = require("./routes/api");
const bodyParser = require('body-parser');
// body parser
app.use(bodyParser.json())



app.use('/api', apiRouter);

// server
app.listen(port, function(){
    console.log("Server is listening on..."+port)
});