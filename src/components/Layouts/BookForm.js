import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import { addBook } from '../../redux/books/books';
import classes from './BookForm.module.scss';
import Input from '../UI/Input';

const BookForm = () => {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const handleBookChange = (e) => {
    setTitle(e.target.value);
  };

  const handleAuthorChange = (e) => {
    setAuthor(e.target.value);
  };

  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    const book = {
      id: uuidv4(),
      title,
      author,
      category: `${['Action', 'Fiction', 'Adventure', 'Classics'][Math.floor(Math.random() * ['Action', 'Fiction', 'Adventure', 'Classics'].length)]}`,
    };
    if (title.length && author.length) {
      dispatch(addBook(book));
      setTitle('');
      setAuthor('');
    }
  };

  return (
    <form className={classes['form-group']} onSubmit={handleSubmit}>
      <Input
        input={{
          type: 'text',
          name: '',
          value: title,
          placeholder: 'Book title',
          onChange: handleBookChange,
        }}
      />
      <Input
        input={{
          type: 'text',
          name: '',
          value: author,
          placeholder: 'Author',
          onChange: handleAuthorChange,
        }}
      />
      <button type="submit" className={classes.add}>
        Add Book
      </button>

    </form>
  );
};

export default BookForm;
