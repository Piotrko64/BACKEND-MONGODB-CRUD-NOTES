const express = require('express');
const app=express();

app.get('/', (req,res)=>{
    res.send('<h1>Server is active!</h1>')
});

const port = 3000;

app.listen(3000, ()=>{
    console.log("Server is listening on..."+port)
});