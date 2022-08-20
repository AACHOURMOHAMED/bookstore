import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { removeBook } from '../../redux/books/books';
import classes from './Book.module.scss';
import Card from '../UI/Card';

const Book = (props) => {
  const { book } = props;
  const dispatch = useDispatch();

  const removeBookfromStore = () => {
    dispatch(removeBook(book.item_id));
  };

  return (
    <Card>
      <div className={classes.Book}>
        <div className={classes.Book__category}>
          <span>{book.category}</span>
        </div>
        <div className={classes.Book__title}>
          <span>{book.title}</span>
        </div>
        <div className={classes.Book__author}>
          <span>{book.author}</span>
        </div>
        <div className={classes.inputs}>
          <input
            type="button"
            className={classes.Book__btn}
            value="Comments"
          />
          <input
            type="button"
            className={classes.Book__btn}
            onClick={removeBookfromStore}
            value="Remove"
          />
          <input
            type="button"
            className={classes.Book__btn}
            value="Edit"
          />
        </div>
      </div>
      <div className={classes.Chart}>
        <div className={classes['Oval-2']} />
        <div className={classes.Chart__value}>
          <span className={classes.perstegae}>
            {Math.floor(Math.random() * 100) }
            %
          </span>
          <span className={classes.completed}>completed</span>
        </div>
      </div>
      <div className={classes.chapter}>
        <div className={classes.chapter__title}>
          <span className={classes.Current__Chapter}>CURRENT CHAPTER</span>
          <span className={classes.chapter}>
            <span>Chapter</span>
            {Math.floor(Math.random() * 100) }
          </span>
          <input
            type="button"
            className={classes.update}
            value="UPDATE PROGRESS"
          />
        </div>
      </div>

    </Card>
  );
};

export default Book;

Book.defaultProps = {
  book: {
    item_id: '',
    title: '',
    author: '',
    category: '',
    value: '',
  },
};

Book.propTypes = {
  book: PropTypes.shape({
    item_id: PropTypes.string,
    title: PropTypes.string,
    author: PropTypes.string,
    category: PropTypes.string,
    value: PropTypes.number,
  }),
};
