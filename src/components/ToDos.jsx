import React from 'react';
import '../App.css';
import { useSelector , useEffect} from 'react-redux';
import Todo from './Todo';

function ToDo({todos}) {
useEffect(() => {
    const state = useSelector(state => state);
}, [])
    console.log(todos);

    return (
        <div>
   {todos.map((todo) => (
              <Todo key = {todo.id} todo={todo} />
            ))} 
        </div>
    )
}

export default ToDo
