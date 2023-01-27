import React from 'react';
import styled from 'styled-components';

import favicon from './favicon.svg';
import useCounterStore from './store/counter';

const App = () => {
  const { count, increment } = useCounterStore((state) => state);

  return (
    <AppLayout>
      <FaviconImage src={favicon} alt="favicon" />
      Vite App
      <Button onClick={increment}>clicked: {count}</Button>
    </AppLayout>
  );
};

export default App;

const AppLayout = styled.div`
  background-color: #282c34;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: calc(10px + 2vmin);
  color: white;
  gap: 1rem;
`;

const FaviconImage = styled.img`
  height: 10vmin;
  pointer-events: none;
`;

const Button = styled.button`
  background-color: #61dafb;
  border: none;
  border-radius: 0.5rem;
  color: #282c34;
  font-size: 1rem;
  padding: 0.5rem 1rem;
  cursor: pointer;
  transition: all 0.2s ease-in-out;

  &:hover {
    background-color: #fff;
    color: #61dafb;
  }

  &:active {
    transform: scale(0.95);
  }
`;
