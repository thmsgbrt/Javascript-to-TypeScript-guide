import React, { useState } from 'react';
import StyledTodo from './styled';
import TodoItem from '../todoItem/todoItem';

interface Item {
  id: number;
  text: string;
}

const DEFAULT_ITEMS: Item[] = [
  { id: 1, text: 'Convert my App to TypeScript' },
  { id: 2, text: 'Get a coffee' },
];

const Todo = (): JSX.Element => {
  const [items, setItems] = useState<Item[]>(DEFAULT_ITEMS);
  const [inputVal, setInputVal] = useState<string>('');

  const deleteItem = (id: number): void =>
    setItems([...items.filter(i => i.id !== id)]);

  return (
    <StyledTodo>
      <div className="todo__add">
        <input
          type="text"
          value={inputVal}
          onChange={(e: React.FormEvent<HTMLInputElement>) =>
            setInputVal(e.currentTarget.value)
          }
        />
        <button
          onClick={(e: React.MouseEvent<HTMLButtonElement>) =>
            setItems([...items, { id: items.length + 1, text: inputVal }])
          }
        >
          Add stuff
        </button>
      </div>
      <div className="todo__items">
        {items.map((t: Item) => (
          <TodoItem key={t.id} id={t.id} text={t.text} onDelete={deleteItem} />
        ))}
      </div>
    </StyledTodo>
  );
};

export default Todo;
