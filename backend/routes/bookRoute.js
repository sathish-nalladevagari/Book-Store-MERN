import express from "express";

import { Book } from "../models/bookModel.js";

const router = express.Router()

router.post("/",async(req,res)=>{
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
//getting all books

router.get("/",async (req,res)=>{
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
// getting book by id

router.get("/:id", async(req,res)=>{
    const {id} = req.params
    const book = await Book.findById(id)
    if (!book){
        return res.status(401).send("Book not found")
    }
    return res.status(201).json(book)
})
// updating a book by id

router.put("/:id", async(req,res)=>{
   
    const {id} = req.params
    
    try {
        if (!req.body.title || !req.body.author || !req.body.publishYear ){
            return res.status(402).send("Please give all fields")
        }
        const result = await Book.findByIdAndUpdate(id,req.body)
        
        if (!result){
            return res.status(402).json("Book not found")
        }
        return res.status(201).send("Book updated successfully")

    } catch (error) {
        console.log(error)
        return res.status(402).json({message: error.message})
    }
})

// delete a book api
router.delete("/:id", async (req,res)=>{
    const {id} = req.params
    try {
        const result = await Book.findByIdAndDelete(id)
        if(!result){
            return res.status(401).send("Book not found")
        }
        return res.status(201).send("Book Deleted Successfully")
    } catch (error) {
        return res.status(402).json({message:error.message})
    }
})

export default router