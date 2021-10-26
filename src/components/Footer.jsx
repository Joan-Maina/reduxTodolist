import React, { useState, useEffect } from 'react'
import { useSelector } from 'react-redux';
import '../App.css';

function Footer() {
    const {todos} = useSelector(state => state);
    
    const completedTasks = todos.filter(todo => todo.completed  == true)
    
    return (
        <div>
            <p>completed tasks: {completedTasks.length} </p>
        </div>
    )
}

export default Footer
