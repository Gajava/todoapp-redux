
import {useEffect, useState} from 'react'
import './App.css';
import {useDispatch, useSelector } from 'react-redux'
import { AddTodoAction, RemoveTodoAction } from './actions/TodoActions';

function App() {
  const[todo,setTodo]=useState('');
  const dispatch=useDispatch();
  const Todo =useSelector(state =>state.Todo.Todo);



const handleSubmit =(e) =>{
  e.preventDefault();
  dispatch(AddTodoAction(todo))
}
const removeHandler=() =>{
  dispatch(RemoveTodoAction(todo))
}

  return (
    <div className="App">
    <header className='header'>
<h2>Todo List App in Redux</h2>
<form onSubmit={handleSubmit}>
  <input placeholder="enter a Todo"
  style={{
    width:350,
    padding:10,
    borderRadius:20,
    border:"none",
    fontSize:20,
   
  }} 
   onChange ={(e) =>setTodo (e.target.value)}/>
  <button type="submit">Go</button>
</form >
  <ul className='allTodo'>
    {
      Todo && Todo.map((todo)=>(
        <li  key= {todo.id}className='singleTodo'>
        <span className='todoText'>{todo}</span>
        <button  className='todobtn' onClick={() =>removeHandler(todo)}> Delete</button>
    
  </li>
   ) )}
    </ul>
</header>
    </div>
  );
      
      }
export default App;
