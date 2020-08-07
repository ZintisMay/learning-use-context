import React, { useState, useEffect, useReducer, useContext } from 'react'
// import './ElementCreator.css';
import { StateContext } from '../State'

function BoxA() {
	
  const [ { points }, dispatch ] = useContext( StateContext )

  return (
    <div className="box BoxA">
      BoxA
        <button onClick={() => dispatch({type: 'add'})}>Add</button>
        <p>{ points }</p>
    </div>
  );
}

export default BoxA;
