import React, { useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import axios from 'axios'
import Spinner from '../components/Spinner'

function DeleteBook() {
    const [loading, setLoading] = useState(false)
    const navigate = useNavigate()
    const {id} = useParams()
    const handleDeleteBook = ()=>{
        setLoading(true)
        axios.delete(`https://book-store-mern-tawny.vercel.app/books/${id}`)
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
        <h1 className='text-3xl my-4'>Delete Book</h1>
        {loading ? <Spinner/> : ''}
        <div className='flex flex-col items-center border-sky-400 rounded-xl w-[600px] p-8 mx-auto'></div>
        <h3 className='text-2xl '> Are you sure you want to delete</h3>
        <button className='p-4 bg-red-600 text-white m-8 w-full' onClick={handleDeleteBook}>
            Yes, Delete it
        </button>
    </div>
  )
}

export default DeleteBook