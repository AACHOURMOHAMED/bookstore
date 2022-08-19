import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux/es/exports';
import Book from '../components/Layouts/Book';
import BookForm from '../components/Layouts/BookForm';
import { getBooks } from '../redux/books/books';

import classes from './Books.module.scss';

const Books = () => {
  const books = useSelector((state) => state.books);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getBooks());
  }, [dispatch]);
  return (
    <div className={classes.books}>
      {books.map((book) => (
        <Book key={book.item_id} book={book} />
      ))}
      <div className={classes.addbooks}>
        <h1>Add book</h1>
        <BookForm />
      </div>
    </div>
  );
};

export default Books;
