import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';
import Spinner from '../components/Spinner';
import BackButton from '../components/BackButton';
import { useSnackbar } from 'notistack';

const DeleteBook = () => {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { id } = useParams(); // Get book ID from URL
  const { enqueueSnackbar } = useSnackbar(); // Importing useSnackbar for notifications

  useEffect(() => {
    const confirmDelete = window.confirm("Are you sure you want to delete this book?");
    if (confirmDelete) {
      setLoading(true);

      axios.delete(`http://localhost:5555/books/${id}`)
        .then(() => {
          setLoading(false);
          //alert("Book deleted successfully.");
          enqueueSnackbar('Book deleted successfully!', { variant: 'success' });
          navigate('/');
        })
        .catch((error) => {
          setLoading(false);
          //alert("Error deleting book: " + error.message);
          enqueueSnackbar('Error deleting book: ' + error.message, { variant: 'error' });
        });
    } else {
      navigate('/');
    }
  }, [id, navigate]);

  return (
    <div className="p-4">
      <BackButton navigate="/" />
      <h1 className="text-3xl my-4">Delete Book</h1>
      {loading ? <Spinner /> : <p className="text-gray-600">Processing deletion...</p>}
    </div>
  );
};

export default DeleteBook;
