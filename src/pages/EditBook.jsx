import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';
import Spinner from '../components/Spinner';
import BackButton from '../components/BackButton';
import { useSnackbar } from 'notistack';

const EditBook = () => {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [publishYear, setPublishYear] = useState('');
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();
  const { enqueueSnackbar } = useSnackbar(); // Importing useSnackbar for notifications
  const { id } = useParams();

  // 🧠 Load existing book data
  useEffect(() => {
    setLoading(true);
    axios.get(`https://book-store-backend-myup.onrender.com/books/${id}`)
      .then((response) => {
        setTitle(response.data.title);
        setAuthor(response.data.author);
        setPublishYear(response.data.publishYear);
        setLoading(false);
      })
      .catch((error) => {
        setLoading(false);
        alert("Error fetching book: " + error.message);
      });
  }, [id]);

  // 💾 Handle form submission
  const handleEditBook = (e) => {
    e.preventDefault();

    const updatedData = {
      title,
      author,
      publishYear,
    };

    setLoading(true);

    axios.put(`https://book-store-backend-myup.onrender.com/books/${id}`, updatedData)
      .then((response) => {
        setLoading(false);
       // alert("Book updated successfully.");
        enqueueSnackbar('Book updated successfully!', { variant: 'success' });
        navigate('/');
      })
      .catch((error) => {
        setLoading(false);
       // alert("Error updating book: " + error.message);
        enqueueSnackbar('Error updating book: ' + error.message, { variant: 'error' });
      });
  };

  return (
    <div className="p-4">
      <BackButton destination={-1}  />
      <h1 className="text-3xl my-8">Edit Book</h1>
      {loading ? <Spinner /> : (
        <form onSubmit={handleEditBook} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">Title</label>
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-sky-500 focus:border-sky-500"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Author</label>
            <input
              type="text"
              value={author}
              onChange={(e) => setAuthor(e.target.value)}
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-sky-500 focus:border-sky-500"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Publish Year</label>
            <input
              type="number"
              value={publishYear}
              onChange={(e) => setPublishYear(e.target.value)}
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-sky-500 focus:border-sky-500"
              required
            />
          </div>
          <button
            type="submit"
            className="bg-sky-800 text-white px-4 py-2 rounded-lg hover:bg-sky-700 transition-colors duration-200"
          >
            Update Book
          </button>
        </form>
      )}
    </div>
  );
};

export default EditBook;
