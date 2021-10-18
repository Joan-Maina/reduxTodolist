import React, { useState, useEffect } from 'react'
import { useSelector } from 'react-redux';
import '../App.css';

function Footer() {
    const [completed, setCompleted] = useState(null);
    
    // useEffect(() => {
    //     const state = useSelector(state => state);
    //     const completed_todos = state.todos.filter(todo => todo.completed === true);

    //     setCompleted(completed_todos.length)

    // }, [completed, setCompleted])
    
    return (
        <div>
            <p>completed tasks: </p>
        </div>
    )
}

export default Footer
