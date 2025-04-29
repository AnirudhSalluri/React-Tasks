import React from 'react'
import { useEffect } from 'react';
import { useRef } from 'react'
import FormComponent from './FormComponent';
import { useState } from 'react';
import ReactHookForm from './ReactHookForm';

  const App = () => {
    const ref = useRef(null);
    const [hobbies,sethobbies] = useState([]);
    const [hobbie,sethobbie] = useState("");
    const [name,setname] = useState("");
    const [age,setage] = useState("");
    const [email,setemail] = useState("");
    const [formdata,setformdata] = useState({
      name,email,age,hobbies
    })
  
   
     useEffect(()=>{
      ref.current.focus();
     },[])
      
    
    
    return (
      <>
      <FormComponent age={age} email={email}  name={name} setage={setage} setname={setname} setemail={setemail} formdata={formdata} setformdata={setformdata} hobbies={hobbies} sethobbies={sethobbies} hobbie={hobbie} sethobbie={sethobbie}>
      
        <label htmlFor='name'>Name</label>
        <input value={name} onChange={(e)=>setname(e.target.value)} ref={ref} className='border w-50' name='name' ></input>
        <label  htmlFor='email'>Email</label>
        <input value={email} onChange={(e)=>setemail(e.target.value)} className='border w-50' name='email' ></input>
        <label htmlFor='age'>Age</label>
        <input value={age} onChange={(e)=>setage(e.target.value)} className='border w-50' name='age' ></input>  

      </FormComponent>
      {/* <ReactHookForm/> */}


      </>
    )
  }


export default App