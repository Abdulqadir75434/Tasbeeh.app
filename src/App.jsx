import React, { useState } from 'react';
import './App.css';

const tasbeehList = ['سُبْحَانَ ٱللّٰه', 'ٱلْـحَـمْـدُ للهِ', 'اللہ اکبر','اشتغفر الله' ,'لَا إِلٰهَ إِلَّا ٱللّٰهُ مُحَمَّدٌ رَسُولُ ٱللّٰهِ'];

function App() {
  const [count, setCount] = useState(0);
  const [tasbeehIndex, setTasbeehIndex] = useState(0);

  const handleCount = () => {
    setCount(prev => prev + 1);
  };

  const handleReset = () => {
    setCount(0);
  };

  const handleNext = () => {
    setTasbeehIndex((prevIndex) => (prevIndex + 1) % tasbeehList.length);
    setCount(0);
  };

  return (
    <div className="App">
      <h1>Tasbeeh App</h1>
      <h2>{tasbeehList[tasbeehIndex]}</h2>
      <div className="counter">{count}</div>
      <button onClick={handleCount}>Count</button>
      <button onClick={handleReset}>Reset</button>
      <button onClick={handleNext}>Next Tasbeeh</button>
    </div>
  );
}

export default App;