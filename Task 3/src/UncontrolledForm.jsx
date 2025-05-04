import React, { useRef } from 'react'
import { useContext} from 'react';
import { ContextProvider } from './App';

const UncontrolledForm = () => {
    const {dark , setdark} = useContext(ContextProvider)
    const ref = useRef();
    const showname=(e)=>{
        e.preventDefault();
        console.log(`Name:${ref.current.value}`);
        ref.current.value="";
    }
  return (
    <div>
        <form onSubmit={showname}>
            <input placeholder='Enter the name' name='name' ref={ref} className='border' />
            <button type='submit'>Submit</button>
        </form>
        <button onClick={()=>setdark(`bg-blue-400 h-screen w-full`)}>Dark mode</button>
    </div>
  )
}

export default UncontrolledForm