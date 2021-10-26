import React from 'react';
import '../App.css';
import { useSelector } from 'react-redux';
import Todo from './Todo';

function ToDo() {

    const state = useSelector(state => state);

    return(
        <>
    {state.todos.length > 0 ?
       state.todos.map((todo,index) => (
                  <Todo key = {index} todo={todo} />
                ))
        :
        <h5>no to-dos to show</h5>
    }
    </>
    ) 
}

export default ToDo
