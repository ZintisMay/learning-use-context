import React, { useState, useEffect, useReducer } from 'react'
// import './TodoList.css';

function reducer(state, action) {
  console.log(action, state)
  const switcher = {
    add: ()=>{return {...state, points: state.points + 1}},
    sub: ()=>{return {...state, points: state.points - 1}},
    setTeam: ()=>{return {...state, team: action.value}},
    default:function(){console.log("ERROR");return state}
  }
  return switcher[action.type]?.() || switcher["default"]()
}

function TodoList() {

  const [text, setText ] = useState("")
  const [texts, setTexts ] = useState([])
  
  const [state, dispatch ] = useReducer(reducer, {points:0, team:""})

  console.log(text)

  const addText = (newText) => {
    setTexts([...texts, text])
    setText("")
  }

  return (
    <div className="EC">

      <br/>
      Section with Reducer
      <button onClick={()=>dispatch({type:"add"})} value={text}>+</button>
      <button onClick={()=>dispatch({type:"sub"})} value={text}>-</button>
      <button onClick={()=>dispatch({type:"clear"})} value={text}>Clear</button>
      <input placeholder="setTeam" onChange={(e)=>{dispatch({type:"setTeam",value:e.target.value})}} />
      {state.points + state.team}


      <br/>            
      TodoList


      <input placeholder="to do list" onChange={(e)=>{setText(e.target.value)}} value={text} />
      <button onClick={()=>{addText()}} >New Text</button>

      {
        texts.map( (item, index) => {
          return (<p key={index} onClick={ (index) => { } }>{item}</p>)
        })
      }

      <br/>

    </div>
  );
}

export default TodoList;
