import React, { useState } from 'react';
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
          onChange: () => {},
        }}
      />

    </form>
  );
};

export default BookForm;
