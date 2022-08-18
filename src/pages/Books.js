import React from 'react';
import { useSelector } from 'react-redux';
import Book from '../components/Layouts/Book';
import BookForm from '../components/Layouts/BookForm';
import classes from './Books.module.scss';

const Books = () => {
  const books = useSelector((state) => state.books);
  return (
    <div className={classes.books}>
      {books.map((book) => (
        <Book key={book.id} book={book} />
      ))}
      <div className={classes.addbooks}>
        <h1>Add book</h1>
        <BookForm />
      </div>
    </div>
  );
};

export default Books;
