import React from 'react'
import useTodo from './UseTodo'

const TodoStats = () => {
    const {todos}=useTodo();

    const getCompleted=()=>{
       const newtodo= todos.filter((todo)=>todo.completed)
       return newtodo.length
    }
    const getPending=()=>{
        const newtodo = todos.filter((todo)=>!todo.completed)
        return newtodo.length
    }

  return (
    <div>
        <ul>
            <li>Total : {todos.length}</li>
            <li>Completed : {getCompleted()} </li>
            <li>Pending :  {getPending()}</li>
        </ul>
        
       
        
    </div>
  )
}

export default TodoStats