/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import PropTypes from 'prop-types';
import classes from './Input.module.scss';

const Input = (props) => {
  const { input } = props;
  return (
    <div className={classes['form-group']}>
      <input {...input} className={classes['form-control']} />
    </div>

  );
};

export default Input;

Input.defaultProps = {
  input: {
    type: 'text',
    name: '',
    value: '',
    placeholder: '',
    onChange: () => {},
  },
};

Input.propTypes = {
  input: PropTypes.shape({
    type: PropTypes.node,
    name: PropTypes.node,
    value: PropTypes.node,
    placeholder: PropTypes.node,
    onChange: PropTypes.func,
  }),
};
