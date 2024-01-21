const express = require("express");

require("dotenv").config();

(process.env.NODE_ENV == "development")?console.log("development environment"):console.log("production environment");

const PORT = (process.env.NODE_ENV == "development")?process.env.NODE_DEV_PORT:process.env.NODE_PROD_PORT;

const HTTP_SERVER = express();

HTTP_SERVER.get("/",(req,res)=>{
  return res.status(200).json({
    message:"Server running successfully"
  })
})

HTTP_SERVER.listen(PORT,'0.0.0.0',()=>{
    console.log(`Server started at ${PORT}`)
})



