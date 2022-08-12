import React from 'react';
import PropTypes from 'prop-types';
import classes from './Card.module.scss';

const Card = (props) => {
  const { children } = props;
  return (
    <div className={classes.card}>
      {children}
    </div>
  );
};

export default Card;

Card.defaultProps = {
  children: null,
};

Card.propTypes = {
  children: PropTypes.node,
};
