import React, { useState, useEffect, useReducer, useContext } from 'react'
// import './ElementCreator.css';
import { StateContext } from '../State'

function BoxB() {
	
  const [ { points }, dispatch ] = useContext( StateContext )


  return (
    <div className="box BoxB">
      BoxB
        <button onClick={() => dispatch({type: 'add'})}>Add</button>
        <p>{ points }</p>
    </div>
  );
}

export default BoxB;
