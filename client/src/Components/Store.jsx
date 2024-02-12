import React, { useEffect, useState } from 'react';
import '../styles/Store.css';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Store = () => {
  const ID=window.localStorage.getItem('userID');
  const [books, setBooks] = useState([]);
  const [owner, setOwners] = useState([]);

    useEffect(() => {
    async function getBooks() {
      try {
        const ID = window.localStorage.getItem("userID");
        console.log(ID);
        const res = await axios.get(`http://localhost:5003/book/getmybooks/${ID}`);
        setBooks(res.data);
      } catch (e) {
        console.log(e);
      }
    }
    getBooks();
  }, []);


  useEffect(() => {
    async function getOwners() {
      const ownerPromises = books.map(async (book) => {
        const own = await axios.get(`http://localhost:5003/book/getbyid/${book.Owner}`);
        return own.data[0].username;
      });

      Promise.all(ownerPromises).then((ownerNames) => {
        setOwners(ownerNames);
      });
    }
    if (books.length > 0) {
      getOwners();
    }
  }, [books]);

  const DeleteRecord = async (bookid) => {
    try {
      const deleted = await axios.get(`http://localhost:5003/book/deleteit/${bookid}`);
      console.log(deleted);
      window.location.reload();
    }
    catch (err) {
      console.log(err);
    }

  }
  
  return (
    <div>
      <div className="outer-Box">
      <div className='cards'>
        {books.map((book, index) => (
          <div className="card-main" key={book._id}>
            <div className="card">
              <div className="card__title">
                <div className="icon">
                  <a href="#"><i className="fa fa-arrow-left"></i></a>
                </div>
                <h3>{book.bookName}</h3>
              </div>
              <div className="card__body">
                <div className="half">
                  <div className="featured_text">
                    <h1>{book.title}</h1>
                    <p className="sub">{book.author}</p>
                    <p className="price">Rs{book.price}</p>
                  </div>
                  <div className="image">
                    <img src={book.Img} alt="" />
                  </div>
                </div>
                <div className="half">
                  <div className="description">
                    <p>{book.description}</p>
                  </div>
                  {book.stock ? (<span className="stock"><i className="fa fa-pen"></i> In stock</span>) :
                    (<span className="stock"><i className="fa fa-pen"></i> Out of stock</span>)}
                    <br/>
                    {/* book year */}
                     <span className="stock"><i className="fa fa-pen"></i>Publishing Year :{book.year}</span>
                </div>
               
              </div>
              <div className="card__footer">
                <div className="recommend">
                  <p>Seller:</p>
                  <h3>{owner[index]}</h3>
                </div>
                <div className="action">
                  {book.stock ? (<button type="button" onClick={() => DeleteRecord(book._id)}>Delete</button>)
                   : (<></>)}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
    </div>
  );
};

export default Store;
