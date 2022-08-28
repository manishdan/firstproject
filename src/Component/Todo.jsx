import React from 'react'
import'./Todo.css'


function Todo() {
  return (
    <div className='todo'>
     <div className='todo-logo'>
        <h3>Todo App</h3>
     </div>
     <div className='todo-from'>
        <form>
            <input type="text" className="task" name="task"/>
            <input type="button" className="button" value="Enter"/>
        </form>
     </div>
     <div className=' tode-lists'>
        <h3>Task list</h3>
        <ul>
            <li>take a walk</li>
            <li> Make a presentation</li>
            <li>Cook food</li>
            <li>feed a dog</li>
        </ul>
     </div>
    </div>
  )
}

export default Todo