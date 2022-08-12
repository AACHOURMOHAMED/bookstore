import React from 'react';
import PropTypes from 'prop-types';
import Book from '../components/Layouts/Book';
import BookForm from '../components/Layouts/BookForm';
import classes from './Books.module.scss';

const Books = (props) => {
  const { books } = props;

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

Books.defaultProps = {
  books: [],
};

Books.propTypes = {
  books: PropTypes.arrayOf(PropTypes.node),
};
