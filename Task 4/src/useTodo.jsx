import React, { useCallback, useEffect, useReducer } from 'react'

const initialState = JSON.parse(localStorage.getItem('todos'))||[];

function todoReducer(state,action){
  switch(action.type){
    case 'ADD':
      return [...state,{id:Date.now(),title:action.title,completed:false}]
    case 'TOGGLE':
      return state.map(todo =>
        todo.id === action.id ? { ...todo, completed: !todo.completed } : todo
      );
    case 'REMOVE':
      return state.filter(todo => todo.id !== action.id);
    default:
      return state;
  }
}


const useTodo = () => {

  const[todos,dispatch]=useReducer(todoReducer,initialState);

  useEffect(()=>{
    localStorage.setItem('todos',JSON.stringify(todos))
  },[todos])

  const addTodo = useCallback((title)=>{
      dispatch({type:'ADD',title});
  },[])

  const toggleTodo = useCallback(id => {
    dispatch({ type: 'TOGGLE', id });
  },[]);

  const removeTodo = useCallback(id => {
    dispatch({ type: 'REMOVE', id });
  },[]);


  return {
    todos,addTodo,toggleTodo,removeTodo
  }
}

export default useTodo