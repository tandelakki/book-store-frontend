import React from 'react'
import { Link, Route, Routes } from 'react-router-dom'
import { MdOutlineAddBox } from 'react-icons/md'
import { useState } from 'react'
import Spinner from '../components/Spinner'
import { BiInfoCircle } from 'react-icons/bi';
import { useEffect } from 'react'
import axios from 'axios'
import { AiOutlineEdit } from 'react-icons/ai';
import { MdOutlineDelete } from 'react-icons/md';
import BooksTable from '../components/home/BooksTable'
import BooksCard from '../components/home/BooksCard'
import BASE_URL from '../api'




const Home = () => {


  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(false)
  const [showType, setShowType] = useState('table');

  useEffect(() => {
    setLoading(true)
    axios
      .get(`${BASE_URL}/books`)
      .then((response) => {
        setBooks(response.data.books);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching books:", error);
        setLoading(false);
      });
  },[])



  return (
    
      

      
    
    
    <div className="p-4 justify-center items-center">
      <div className="flex justify-center items-center gap-x-4" >
        <button onClick={() => setShowType('table')} className= 'text-black-600 bg-sky-400 hover:bg-sky-600  px-4 py-1 rounded-lg'>Table View</button>
        <button onClick={() => setShowType('card')} className="text-black-600 hover:bg-sky-600 bg-sky-400 px-4 py-1 rounded-lg">Card View</button>

      </div>
      <div className="flex justify-between items-center">
        <h1 className="text-3xl my-8">Books List</h1>
        <Link to="/books/create">
          <MdOutlineAddBox className="text-sky-800 text-4xl" />
        </Link>



      </div>
{loading? <Spinner/> : showType === 'table' ? ( <BooksTable books={books} />) : (
  <BooksCard books={books} />
  
)}
    </div>
  )
}

export default Home