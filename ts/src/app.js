import React from 'react';
import styled from 'styled-components';
import Todo from './components/todo/todo.tsx';

const StyledApp = styled('div')`
  background: #f9fbfb;
  height: 100vh;
  padding: 20%;
`;

const App = () => {
  return (
    <StyledApp>
      <h1>TODO</h1>
      <Todo />
    </StyledApp>
  );
};

export default App;
