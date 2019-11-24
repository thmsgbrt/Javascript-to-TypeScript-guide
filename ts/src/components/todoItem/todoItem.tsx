import React from 'react';
import StyledTodoItem from './styled';

interface Props {
  id: number;
  text: string;
  onDelete: Function;
}

const TodoItem = ({ id, text, onDelete }: Props): JSX.Element => (
  <StyledTodoItem>
    <span>{text}</span>
    <button onClick={() => onDelete(id)}>X</button>
  </StyledTodoItem>
);

export default TodoItem;
