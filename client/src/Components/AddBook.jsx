import React, { useState } from 'react';
import '../styles/AddBook.css';
import axios from 'axios';

const AddBook = () => {
const id=window.localStorage.getItem("userID");
  const [book, setBook] = useState({
    bookName: '',
    price: 0,
    author: '',
    Img: '',
    Owner:id,
    stock:true,
    year:0
  });

  const AddData = (e) => {
    const { name, value } = e.target;
    setBook({ ...book, [name]: value });
  };

  const AddDoc = async (e) => {
    e.preventDefault();
    alert("Once added cannot be undone");
    console.log(book);
    try {
      const res = await axios.post('http://localhost:5003/book',  book);
      console.log(res);
      alert("Success!");
      window.location.reload();
    } catch (error) {
      console.error('Error adding book:', error);
    }
  };

  return (
    <div className='book-outer'>
      <div className='book-input'>
        <form onSubmit={AddDoc}>
          <div className="mb-3">
            <label htmlFor="bookName" className="form-label">Enter Book's name:</label>
            <input type="text" className="form-control" id="bookName" name="bookName" onChange={AddData} />
          </div>
          <div className="mb-3">
            <label htmlFor="price" className="form-label">Enter price in INR:</label>
            <input type="number" className="form-control" id="price" name="price" onChange={AddData} />
          </div>
          <div className="mb-3">
            <label htmlFor="author" className="form-label">Enter name of Author:</label>
            <input type="text" className="form-control" id="author" name="author" onChange={AddData} />
          </div>
          <div className="mb-3">
            <label htmlFor="Img" className="form-label">Enter image url/path:</label>
            <input type="text" className="form-control" id="Img" name="Img" onChange={AddData} />
          </div>
          {/* new var */}
          <div className="mb-3">
            <label htmlFor="year" className="form-label">Publishing Year:</label>
            <input type="number" className="form-control" id="year" name="year" onChange={AddData} />
          </div>

          <button type="submit" className="btn btn-primary">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default AddBook;
