import React from 'react';
import './App.css';
import { ClassState } from './components/ClassState';
import { UseState } from './components/UseState';

function App() {
  return (
    <div className="App">
      <UseState />
      <ClassState />
    </div>
  );
}

export default App;
