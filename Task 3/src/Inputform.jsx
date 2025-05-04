import React, { useState } from 'react'
import { useContext } from 'react';
import { ContextProvider } from './App';

const Inputform = () => {
    const {dark,setdark} = useContext(ContextProvider)
    const [name,setname] = useState("");
    const [age,setage] = useState("");
    const [formdata,seetformdata] = useState({
        name,age
    })
    const handlesubmit=(e)=>{
        e.preventDefault();
        const data = {
           name
           ,age
        }
        seetformdata(data);
        console.log(data)
        setage("")
        setname("")
    }
  return (
    <div>
        <form onSubmit={handlesubmit}>
            <input className='border' name='name' placeholder='Enter the name' value={name} onChange={(e)=>setname(e.target.value)} />
            <input className='border' name='age' placeholder='Enter your age' value={age} onChange={(e)=>setage(e.target.value)} />
            <button type='submit'>Submit</button>
        </form>
        <button onClick={()=>setdark(`bg-pink-400 w-full h-screen flex flex-col`)}>Dark mode</button>
    </div>
  )
}

export default Inputform