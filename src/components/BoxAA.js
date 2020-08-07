import React, { useState, useEffect, useReducer, useContext } from 'react'
// import './ElementCreator.css';
import { StateContext } from '../State'

function BoxA() {
  const [ { points }, dispatch ] = useContext( StateContext )

  return (
    <div className="BoxA">
      BoxA
    </div>
  );
}

export default BoxA;
