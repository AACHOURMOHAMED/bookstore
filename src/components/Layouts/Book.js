import React from 'react';
import PropTypes from 'prop-types';
import Input from '../UI/Input';
import classes from './Book.module.scss';
import Card from '../UI/Card';

const Book = (props) => {
  const { book, author } = props;
  return (
    <Card>
      <div className={classes.Book}>
        <div className={classes.Book__title}>
          <span>{book}</span>
        </div>
        <div className={classes.Book__author}>
          <span>{author}</span>
        </div>
        <Input
          input={{
            type: 'button',
            name: '',
            value: 'ADD BOOK',
            placeholder: 'Author',
            onChange: () => {},
          }}
        />
      </div>
    </Card>
  );
};

export default Book;

Book.defaultProps = {
  book: '',
  author: '',
};

Book.propTypes = {
  book: PropTypes.node,
  author: PropTypes.node,
};
