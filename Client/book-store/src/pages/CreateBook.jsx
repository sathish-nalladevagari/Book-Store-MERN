import React, { useState } from 'react'
import Spinner from '../components/Spinner'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

function CreateBook() {
    const [title,setTitle] = useState("")
    const [Author,setAuthor] = useState("")
    const [publishYear,setPublishYear] = useState("")
    const [loading,setLoading] = useState("")
    const navigate = useNavigate()

    const handleSaveBook = ()=>{
        const data = {
            title : title,
            author : Author,
            publishYear : publishYear
        }
        setLoading(true)
        axios.post("http://localhost:5555/books",data)
        .then(()=>{
            setLoading(false)
            navigate("/")
        })
        .catch((error)=>{
            console.log(error)
            setLoading(false)
        })
    }
  return (
    <div className='p-4'>
        <h1 className='text-3xl my-4' >Create Book</h1>
        {loading ? <Spinner/> : '' }
        <div className='flex flex-col border-2 border-sky-400 rounded-xl w-[600px] p-4 mx-auto'>
            <div className='m-4'>
                <label className='text-xl mr-4 text-gray-500 '>Title</label>
                <input 
                type='text'
                value={title}
                onChange={(e)=>setTitle(e.target.value)}
                className='border-2 border-gray-500 px-4 py-2 w-full'
                />
            </div>
            <div className='m-4'>
                <label className='text-xl mr-4 text-gray-500 '>Author</label>
                <input 
                type='text'
                value={Author}
                onChange={(e)=>setAuthor(e.target.value)}
                className='border-2 border-gray-500 px-4 py-2 w-full'
                />
            </div>
            <div className='m-4'>
                <label className='text-xl mr-4 text-gray-500 '>Year</label>
                <input 
                type='number'
                value={publishYear}
                onChange={(e)=>setPublishYear(e.target.value)}
                className='border-2 border-gray-500 px-4 py-2 w-full'
                />
            </div>
            <button className='p-2 bg-sky-200 m-8' onClick={handleSaveBook}>
                Add Book
            </button>
        </div>
    </div>
  )
}

export default CreateBook