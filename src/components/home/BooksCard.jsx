import React from 'react'
import { MdDelete, MdDeleteForever, MdDeleteOutline, MdDetails, MdEdit } from 'react-icons/md'
import BookSingleCard from './BookSingleCard'

const BooksCard = ({books}) => {

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 ">
      {books.map((book, index) => ( 
        <BookSingleCard key={book._id} book={book}/>
      
      ))}
    </div>

  )
}

export default BooksCard