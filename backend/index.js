import express from "express";
import { MONGOURI, PORT } from "./config.js";
import mongoose from "mongoose";

const app = express();


app.get("/",(req,res)=>{
    console.log(req)
    return res.status(200).send("Welcome")
})


mongoose.connect(MONGOURI)
.then(()=>{
    console.log("Database Connected")
})
.catch((error)=>{
    console.log(error)
})

app.listen(PORT,()=>{
    console.log(`server started at ${PORT}`)
})

