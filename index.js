const http = require('http')
const app = require('express')

app.send((req,res,next)=>{
    console.log("hello from first middleware");
    next();
})

app.send((req,res,next)=>{
    console.log("hello from second middleware");
})

app.listen(3000)

