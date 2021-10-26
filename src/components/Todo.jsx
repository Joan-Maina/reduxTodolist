import React from 'react'
import '../App.css'
import { completed, removetodo } from '../redux/actions/addToDo'
import { useDispatch } from 'react-redux';

function Todo({todo}) {
    // console.log(todo)
   // const state = useSelector(state => state.state)
    const dispatch = useDispatch();
    const handleRemovetodo = ()=>{
        dispatch(removetodo(todo.id))
       }
    const handleCompleted = () =>{
           dispatch(completed(todo.id))
       }
       
    return (
        <>
        
        <div className="todo"style={todo.completed === true ? {backgroundColor: "#90EE90"} : {backgroundColor:"white"}}>
            
            <input type="checkbox" for="complete" onChange={handleCompleted}/>
         <h2>{todo.todo}</h2>
         <button className="deleteButton" onClick={handleRemovetodo}>Delete</button>

        </div>

        </>
    )
}

export default Todo
