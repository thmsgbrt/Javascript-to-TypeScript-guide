import React from 'react';
import PropTypes from 'prop-types';
import StyledTodoItem from './styled';

const TodoItem = ({ id, text, onDelete }) => (
  <StyledTodoItem>
    <span>{text}</span>
    <button onClick={() => onDelete(id)}>X</button>
  </StyledTodoItem>
);

TodoItem.propTypes = {
  id: PropTypes.number.isRequired,
  text: PropTypes.string.isRequired,
  onDelete: PropTypes.func.isRequired,
};

export default TodoItem;
