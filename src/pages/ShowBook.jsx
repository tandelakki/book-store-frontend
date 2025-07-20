import React from 'react'
import BackButton from '../components/BackButton'
import { useState } from 'react'
import { useParams } from 'react-router-dom'
import { useEffect } from 'react'
import Spinner from '../components/Spinner'
import axios from 'axios'

const ShowBook = () => {

const [book, setBook] = useState({})
const [loading, setLoading] = useState(true)
const { id } = useParams()
useEffect(() => {
  setLoading(true)
  axios
    .get(`http://localhost:5555/books/${id}`)
    .then((response) => {
      setBook(response.data);
      setLoading(false);
    })
    .catch((error) => {
      console.error("Error fetching book details:", error);
      setLoading(false);
    });
  }, [id]);
  console.log(book)


  return (
    <div className="p-4">
    <BackButton  destination={-1} />
    <h1 className="text-3xl my-8">Book show</h1>
    {loading ? (
      <Spinner />
    ) : (
      
      <div className="border border-slate-600 rounded-md p-4">
       
        <h2 className="text-xl font-bold p-4">{book.title}</h2>
         <p className="text-gray-700 p-4">id: {book._id}</p>
        <p className="text-gray-700 p-4">Author: {book.author}</p>
        <p className="text-gray-700 p-4">Publish Year: {book.publishYear}</p>
        <p className="text-gray-700 p-4">Description: {book.description}</p>
        <p className="text-gray-700 p-4">create time</p>
        <p>Create Time: {new Date(book.createdAt).toString()}</p>
        <p>Last update Time:{new Date(book.updatedAt).toString()}</p>
        
      </div>
    )}

    </div>
  )
}

export default ShowBook