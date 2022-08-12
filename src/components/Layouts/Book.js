import React from 'react';
import PropTypes from 'prop-types';
import Input from '../UI/Input';
import classes from './Book.module.scss';
import Card from '../UI/Card';

const Book = (props) => {
  const { title, author } = props;
  return (
    <Card>
      <div className={classes.Book}>
        <div className={classes.Book__title}>
          <span>{title}</span>
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
  title: '',
  author: '',
};

Book.propTypes = {
  title: PropTypes.node,
  author: PropTypes.node,
};
