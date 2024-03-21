import express from "express";
import { MONGOURI, PORT } from "./config.js";
import mongoose from "mongoose";
import cors from "cors"
import bookRoute from "./routes/bookRoute.js"


const app = express();
app.use(express.json())
app.use(cors())

app.use("/books",bookRoute)

app.get("/",(req,res)=>{
    console.log(req)
    return res.status(200).send("Welcome")
})


//posting a new book



// connecting to database

mongoose.connect(MONGOURI)
.then(()=>{
    console.log("Database Connected")
})
.catch((error)=>{
    console.log(error)
})

app.listen(PORT ,()=>{
    console.log(`server started at ${PORT}`)
})

