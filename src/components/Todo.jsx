import React from 'react'
import '../App.css'
import { removetodo } from '../redux/actions/addToDo'
import { useDispatch } from 'react-redux';

function Todo({todo}) {

    const dispatch = useDispatch();
    const handleRemovetodo = ()=>{
        dispatch(removetodo({id: todo.id}))
        console.log(todo.todo)
       }
    
    return (
        <div className="todo">
            <input type="checkbox" for="complete"/>
         <h2>{todo.todo}</h2>
         <button className="deleteButton" onClick={handleRemovetodo}>Delete</button>

        </div>
    )
}

export default Todo
