const express = require("express");

//express application
const app = express();

//routes
app.get('/',(req,res)=>{
    res.json({mssg:"Welcome to app"})
})

//listen for requests
app.listen(4000,()=>{
    console.log("Listening on port 4000")
})