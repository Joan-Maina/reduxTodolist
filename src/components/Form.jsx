import React, { useState } from 'react'
import '../App.css';

import { useDispatch } from 'react-redux';
import { addtodo } from '../redux/actions/addToDo';
import { useSelector } from 'react-redux';
function Form() {
const {todos} = useSelector(state => state)

   const [todo, setTodo] = useState('');

   const dispatch = useDispatch();

   const handleAddTodo = (e)=>{
       e.preventDefault();
    dispatch(addtodo({id: todos.length+1, todo, completed:false}))
    setTodo('')
   }
//    setTodo('')
console.log(todos)
    return (
        <div>
            <h1>My to-do list</h1>
            <form>
                <input value={todo} onChange={e => setTodo(e.target.value)} type = "text" placeholder="Add to do..."  />
                <button onClick={handleAddTodo} type="button" >add</button>
            </form>
        </div>
    )
}

export default Form
