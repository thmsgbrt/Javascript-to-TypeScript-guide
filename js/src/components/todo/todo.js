import React, { useState } from 'react';
import TodoItem from '../todoItem/todoItem';
import StyledTodo from './styled';

const DEFAULT_ITEMS = [
  { id: 1, text: 'Convert my App to TypeScript' },
  { id: 2, text: 'Get a coffee' },
];

const Todo = () => {
  const [items, setItems] = useState(DEFAULT_ITEMS);
  const [inputVal, setInputVal] = useState('');

  const deleteItem = id => setItems([...items.filter(i => i.id !== id)]);

  return (
    <StyledTodo>
      <div className="todo__add">
        <input
          type="text"
          value={inputVal}
          onChange={e => setInputVal(e.currentTarget.value)}
        />
        <button
          onClick={e =>
            setItems([...items, { id: items.length + 1, text: inputVal }])
          }
        >
          Add stuff
        </button>
      </div>
      <div className="todo__items">
        {items.map(t => (
          <TodoItem key={t.id} id={t.id} text={t.text} onDelete={deleteItem} />
        ))}
      </div>
    </StyledTodo>
  );
};

export default Todo;
