import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import Counter from './Counter';
import Team from './team';
import Users from './Users';
import Friends from './Friends';
import './App.css';

function App() {
  
  function handleClick() {
    alert('button clicked');
  }

  function handleClick2() {
    alert('button clicked 2');
  }

  const addToFive = (number) => {
    alert(number+5);
  };

  return (
    <>
      <h1>React Core Concepts</h1>
      <Friends></Friends>
      <Users></Users>
      <Team></Team>
      <Counter></Counter>
      <button onClick={handleClick}>Click Me</button>
      <button onClick={handleClick2}>Click2</button>
      <button onClick={() => alert('third clicked')}>Third</button>
      <button onClick={() => addToFive(3)}>Four</button>
    </>
  )
}

export default App
