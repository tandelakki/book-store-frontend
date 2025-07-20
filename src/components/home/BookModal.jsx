import React, { useEffect } from 'react';
import { AiOutlineClose } from 'react-icons/ai';

const BookModal = ({ book, onClose }) => {
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, []);

  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-40 z-50 flex items-center justify-center transition-opacity duration-300"
      onClick={onClose}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="bg-white w-full max-w-md p-6 rounded-xl shadow-lg relative"
      >
        <button
          className="absolute top-4 right-4 text-gray-500 hover:text-black transition"
          onClick={onClose}
        >
          <AiOutlineClose size={22} />
        </button>

        <h2 className="text-2xl font-bold text-gray-800 mb-4">{book.title}</h2>
        <div className="space-y-2 text-gray-700">
          <p><span className="font-semibold">Author:</span> {book.author}</p>
          <p><span className="font-semibold">Publish Year:</span> {book.publishYear}</p>
          <p><span className="font-semibold">Description:</span> {book.description || 'No description available'}</p>
        </div>

        <div className="mt-4 text-sm text-gray-500">
          <p>Created: {book.createdAt ? new Date(book.createdAt).toLocaleString() : 'N/A'}</p>
          <p>Updated: {book.updatedAt ? new Date(book.updatedAt).toLocaleString() : 'N/A'}</p>
        </div>
      </div>
    </div>
  );
};

export default BookModal;
