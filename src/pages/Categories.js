import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { BookStatus } from '../redux/categories/categories';
import Input from '../components/UI/Input';

const Categories = () => {
  const categories = useSelector((state) => state.categories);
  const dispatch = useDispatch();
  const handleCategoryChange = (e) => {
    dispatch(BookStatus(e.target.value));
  };

  return (
    <div className="categories">
      <Input
        input={{
          type: 'button',
          name: '',
          value: 'Check status',
          onClick: handleCategoryChange,
        }}
      />
      <h2>
        {categories}
      </h2>
    </div>
  );
};

export default Categories;
