const express = require("express");
const server = express();

const port = process.env.PORT || 3000

const cars = require("./src/data/server.json")

server.get("/Cars",(req,res)=>{
    return res.json(cars)
})


server.listen(port,()=>{
    console.log("O servidor esta funcionando...")
})