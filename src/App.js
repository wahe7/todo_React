import React, { useState } from 'react'
import "./App.css"
import TodoInput from './components/TodoInput'
import Todolist from './components/TodoList';
function App() {
  const [listTodo,setListTodo]=useState([]);
  let addList = (inputText)=>{
    if(inputText!=='')
      setListTodo([...listTodo,inputText]);  /* pehle vale copy ho jayenge and current vala add ho jayega */
  }
  const deleteListItem = (key)=>{
    let newListTodo = [...listTodo];  /* jitne bhi sarey element hongey isme cpy ho jayenge */ 
    newListTodo.splice(key,1)    /* kitne element delete karne hote hai like 1 */
    setListTodo([...newListTodo])  /* update karwa di */
  }
  return (
    <div className="main-container">
      <div className="center-container">
        <TodoInput addList={addList}/>
        <h1 className="app-heading">TODO</h1>
        <hr/>
        {listTodo.map((listItem,i)=>{
          return (
            <Todolist key={i} index={i} item={listItem} deleteItem={deleteListItem}/>  /* key is for unique */
          )
        })}
      </div>
    </div>
  )
}

export default App