import React from 'react'
import { useState } from 'react'
import { AiOutlineEdit } from 'react-icons/ai'
import { BiInfoCircle } from 'react-icons/bi'
import { MdOutlineDelete } from 'react-icons/md'
import { Link } from 'react-router-dom'

const BooksTable = ({books}) => {
     
    
  return (
    <div>
    
  <table className ="w-full border-seperate border-spacing-2">
    <thead>
      <tr>
        <th className="border border-slate-600 rounded-md">S.No</th>
        <th className="border border-slate-600 rounded-md">Title</th>
        <th className="border border-slate-600 rounded-md max-md:hidden">Author</th>
        <th className="border border-slate-600 rounded-md max-md:hidden">Publish Year</th>
        <th className="border border-slate-600 rounded-md">Actions</th>
      </tr>
    </thead>
    <tbody>
        
      {books.map((book, index) => (
        <tr key={book._id} className="h-8">
          <td className="border border-slate-600 rounded-md text-center">{index +1}</td>
          <td className="border border-slate-600 rounded-md text-center">{book.title}</td>
          <td className="border border-slate-600 rounded-md text-center mx-md:hidden">{book.author}</td>
          <td className="border border-slate-600 rounded-md text-center mx-md:hidden">{book.publishYear} </td>
          <td className="border border-slate-600 rounded-md text-center">
            <div className="flex justify-center gap-x-4">
               <Link to={`/books/details/${book._id}`} ><BiInfoCircle/></Link>
            <Link to={`/books/edit/${book._id}`} >< AiOutlineEdit className="text-2xl text-yellow-600"/></Link>
            <Link to={`/books/delete/${book._id}`} ><MdOutlineDelete className="text-2xl text-red-600"/></Link>

            </div>
          </td>
          
           
        </tr>

      ))}
    



    </tbody>
  </table>

    </div>
  )
}

export default BooksTable