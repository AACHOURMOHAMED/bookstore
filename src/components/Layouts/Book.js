import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { removeBook } from '../../redux/books/books';
import Input from '../UI/Input';
import classes from './Book.module.scss';
import Card from '../UI/Card';

const Book = (props) => {
  const { book } = props;
  const dispatch = useDispatch();

  const removeBookfromStore = () => {
    dispatch(removeBook(book));
  };
  return (
    <Card>
      <div className={classes.Book}>
        <div className={classes.Book__title}>
          <span>{book.title}</span>
        </div>
        <div className={classes.Book__author}>
          <span>{book.author}</span>
        </div>
        <Input
          input={{
            type: 'button',
            name: '',
            value: 'DELETE BOOK',
            onClick: removeBookfromStore,
          }}
        />
      </div>
    </Card>
  );
};

export default Book;

Book.propTypes = {
  book: PropTypes.shape({
    id: PropTypes.number,
    title: PropTypes.string,
    author: PropTypes.string,
  }),
};

Book.defaultProps = {
  book: {
    id: 0,
    title: '',
    author: '',
  },
};
