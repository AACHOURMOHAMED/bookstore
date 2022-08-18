import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import Input from '../UI/Input';

const BookForm = () => {
  const [book, setBook] = useState('');
  const [author, setAuthor] = useState('');
  const handleBookChange = (e) => {
    setBook(e.target.value);
  };

  const handleAuthorChange = (e) => {
    setAuthor(e.target.value);
  };

  const dispatch = useDispatch();

  const addBook = () => {
    dispatch({
      type: 'ADD_BOOK',
      payload: {
        id: Math.floor(Math.random()),
        title: book,
        author,
      },
    });
    setBook('');
    setAuthor('');
  };
  return (
    <form className="form-group">
      <Input
        input={{
          type: 'text',
          name: '',
          value: book,
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
      <Input
        input={{
          type: 'button',
          name: '',
          value: 'ADD BOOK',
          placeholder: 'Author',
          onClick: addBook,
        }}
      />

    </form>
  );
};

export default BookForm;
