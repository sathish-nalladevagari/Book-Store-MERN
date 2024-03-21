import express from "express";
import { MONGOURI, PORT } from "./config.js";
import mongoose from "mongoose";
import { Book } from "./models/bookModel.js";

const app = express();
app.use(express.json())


app.get("/",(req,res)=>{
    console.log(req)
    return res.status(200).send("Welcome")
})

app.post("/books",async(req,res)=>{
    // console.log(req.body)
    try {
        if (!req.body.title || !req.body.author || !req.body.publishYear ){
            return res.status(400).send("Send Author, title, publishYear")
        }
        const newBook = {
            title : req.body.title,
            author : req.body.author,
            publishYear : req.body.publishYear
        }
        const book = await Book.create(newBook)
        return res.status(201).send(book)

    } 
    catch (error) {
        console.log(error)
    }
})

app.get("/books",async (req,res)=>{
    try {
        const books = await Book.find({})
        if (!books){
            return res.status(401).send("No Books Detected")
        }
        return res.status(201).json({
            count : books.length,
            data: books 
        })
    } catch (error) {
        return res.status(400).send({message:error.message})
    }
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

