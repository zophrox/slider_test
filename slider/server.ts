// "start": "node --inspect=5858 -r ts-node/register server.ts",
const http =require('http')
const express=require('express')
const path = require("path");
const filePath =path.join(__dirname,'index.html')
const fs = require('fs');
const app = express();

app.use('/images',express.static('slider/images'))
app.use('/style.css',express.static('slider/style.css'))
app.use('/slider-test1.js',express.static('slider/slider-test1.js'))


app.get('/',(req,res)=>{


res.sendFile(filePath);
})
app.listen(3000,()=>{
  console.log("Server has been started....")
})






