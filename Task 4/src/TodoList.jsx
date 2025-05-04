import React, { useState ,useMemo, useRef, useEffect} from 'react'
import useTodo from './UseTodo';

const TodoList = () => {
    const [title,setTitle] = useState("");
    const {todos,addTodo,toggleTodo,removeTodo}  = useTodo();
    const [status,setstatus] = useState('All');
    const ref = useRef();

    const addingtodo=()=>{
        addTodo(title);
        ref.current.value="";
    }

    useEffect(()=>{
        ref.current.focus();
    },[])

    const filteredTodos= useMemo(()=>{
        switch(status){
            case 'Completed':
                return todos.filter((todo)=>todo.completed===true);
            case 'Pending' :
                return todos.filter((todo)=>todo.completed===false);    
            default :
                return todos;    
        }
    },[todos,status]);

  return (
    <div>
        <input ref={ref} onChange={(e)=>setTitle(e.target.value)} value={title} placeholder='Enter the Todo' />
        <button onClick={addingtodo}>Add</button>
    <div>
        <select value={status} onChange={(e)=>setstatus(e.target.value)}>
            <option value="All">All</option>
            <option value="Completed">Completed</option>
            <option value="Pending">Pending</option>
        </select>
        </div>
    <table>
        <thead>
            <th>Title</th>
            <th>Status</th>
            <th>Remove</th>
        </thead>
    {filteredTodos?.map(({id,title,completed})=>(
        <tbody key={id}>
            <td>{title}</td>
            {completed?<td>Completed</td>:<td>Pending</td>}
            <td><button onClick={()=>removeTodo(id)}>Remove</button></td>
            <td><button onClick={()=>toggleTodo(id)}>changeStatus</button></td>
        </tbody>
    ))}
    </table>
    </div>
  )
}

export default TodoList