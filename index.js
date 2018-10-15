// Load .env file
require('dotenv').config()

const express = require('express');
const config = require('./src/config')
const app = express();
const  port = process.env.PORT || 3000
app.get("*",(req,res)=>{
    res.setHeader("Content-Type","application/json")
    res.send(JSON.stringify(config));
    res.end();
})

app.listen(port,()=>{
    console.log(config.message,"PORT",port);
    console.log("FULL CONFIG")
    console.log(config);
})
