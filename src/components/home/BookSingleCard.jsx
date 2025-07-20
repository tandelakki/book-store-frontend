import React, { useState } from 'react'
import { MdDelete, MdDetails, MdEdit } from 'react-icons/md'
import { BiShow } from 'react-icons/bi';
import BookModal from './BookModal';

const BookSingleCard = ({book}) => {
const [showModal, setShowModal] = useState(false);


  return (
      <div key={book._id} className="border p-4 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold">{book.title}</h2>
            <p className="text-gray-700">Author: {book.author}</p>
            <p className="text-gray-700">Publish Year: {book.publishYear}</
p>

            <div className="flex justify-between mt-4">
              <a href={`/books/details/${book._id}`} className="text-blue-600 hover:underline"><MdDetails/></a>
              <a href={`/books/edit/${book._id}`} className="text-yellow-600 hover:underline"><MdEdit/></a>
              <a href={`/books/delete/${book._id}`} className="text-red-600 hover:underline"><MdDelete/></a>
              <BiShow onClick={() => setShowModal(true)}/>

              
            </div>
            {
              showModal && (
                <BookModal book={book} onClose={() => setShowModal(false)} />
              )
            }
        </div>
  )
}

export default BookSingleCard