import React, { useReducer } from 'react';

import { initialState } from './reducers/index.js'
import './App.css';
import { reducer } from './reducers/index.js'
import TodoList from './ components/TodoList.js'
import TodoForm from './ components/TodoForm.js'

function App() {
  const [state, dispatch] = useReducer(reducer, initialState)

  return (
    <div className="App">
      <h1>Todos</h1>
      <TodoForm dispatch={dispatch}/> 
      <TodoList state={state} dispatch={dispatch}/>
    </div>
  );
}

export default App;
