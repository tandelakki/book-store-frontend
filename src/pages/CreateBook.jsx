import React from 'react'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import BackButton from '../components/BackButton';
import axios from 'axios';
import Spinner from '../components/Spinner';
import { useSnackbar } from 'notistack';
import BASE_URL from '../api';

const CreateBook = () => {

  // This is where you would implement the form to create a new book
  // For now, we will just return a placeholder div
  

const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [publishYear, setPublishYear] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { enqueueSnackbar } = useSnackbar();
  const handleSaveBook = (e) => {
    e.preventDefault();
    const data = {
      title,
      author,
      publishYear,
    }
    setLoading(true);
    
    axios.post(`${BASE_URL}/books`, data)
      .then((response) => {
        console.log("Book saved successfully:", response.data);
        setLoading(false);
        enqueueSnackbar('Book created successfully!', { variant: 'success' });
        navigate('/');
      })
      .catch((error) => {
        
        setLoading(false);
        //alert("Error saving book: " + error.message);
        enqueueSnackbar('Error creating book: ' + error.message, { variant: 'error' });
      });

  }
  




  return (
    <div className="p-4">
      <BackButton onClick={() => navigate(-1)}/>
      <h1 className="text-3xl my-8">Create Book</h1>
      {loading ? <Spinner/> : ""}
      <form onSubmit={handleSaveBook} className="space-y-4">  
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
           Save Book
        </button>
      </form>
      <p className="text-gray-500 mt-4">Please fill in the details of the book you want to create.</p>
    </div>
  )
}

export default CreateBook