import React, { useState, useEffect, useReducer, createContext } from 'react'
import './App.css';
import TextCreator from './components/TextCreator';
import { StateProvider } from './State'
import BoxA from './components/BoxA.js'
import BoxB from './components/BoxB.js'

// Defines how to update the state based on actions
const reducer = (state, action) => {
  switch (action.type) {
      case 'add':
          return { ...state, points: state.points + 1 }
      default:
          return state;
  }
};

function App() {
  const initialState = {
    points: 0
  }

  return (
    <StateProvider initialState={initialState} reducer={reducer}>
      App
      <div className="App">
        APP
        <BoxA />
        <BoxB />
        <TextCreator/>
      </div>
    </StateProvider>

  );
}

export default App;
