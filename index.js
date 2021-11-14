const express = require('express');
const app=express();
const {port} = require('./config');
require('./db/mongoose')
const apiRouter = require("./routes/api");
app.use('/', apiRouter);



// server
app.listen(3000, ()=>{
    console.log("Server is listening on..."+port)
});