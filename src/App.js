import React from 'react';
import './App.css';
/* import { ClassState } from './components/ClassState'; */
import { UseState } from './components/UseState';
import { UseReducer } from './components/UseReducer/UseReducer';

function App() {
  return (
    <div className="App">
      <UseState name='Use State'/>
      <UseReducer name='Use Reducer'/>
    </div>
  );
}

export default App;
