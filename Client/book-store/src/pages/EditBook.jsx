import React, { useEffect, useState } from 'react'
import Spinner from '../components/Spinner'
import axios from 'axios'
import { useParams } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'

function EditBook() {
    const [title,setTitle] = useState("")
    const [Author,setAuthor] = useState("")
    const [publishYear,setPublishYear] = useState("")
    const [loading,setLoading] = useState("")
    const navigate = useNavigate()
    const {id} = useParams();
    useEffect(()=>{
        setLoading(true)
        axios.get(`http://localhost:5555/books/${id}`)
        .then((response)=>{
            setTitle(response.data.title)
            setAuthor(response.data.author)
            setPublishYear(response.data.publishYear)
            setLoading(false)
        })
        .catch((error)=>{
            console.log(error)
            setLoading(false)
        })

    },[id])

    const handleEditBook = ()=>{
        const data = {
            title : title,
            author : Author,
            publishYear : publishYear
        }
        setLoading(true)
        axios.put(`http://localhost:5555/books/${id}`,data)
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
        <h1 className='text-3xl my-4' >Edit Book</h1>
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
            <button className='p-2 bg-sky-200 m-8' onClick={handleEditBook}>
                Add Book
            </button>
        </div>
    </div>
  )
}

export default EditBook