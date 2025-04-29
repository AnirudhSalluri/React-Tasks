import React from 'react'

const FormComponent= (props) => {
  const hobbieentry=()=>{
    props.sethobbies([...props.hobbies,props.hobbie])
    props.sethobbie("");
  }
  const handlesubmitform=(e)=>{
    e.preventDefault();
   const data= {
      name:props.name,
      email:props.email,
      age:props.age,
      hobbies:props.hobbies
    }

    props.setformdata(data);

    console.log(data);

    props.setname("");
    props.setage("");
    props.setemail("");
    props.sethobbies([]);
  }
  return (
    <>
      <form onSubmit={handlesubmitform} className='rounded-xl flex flex-col bg-pink-300 w-fit p-4 m-6'>
      {props.children}
      <label htmlFor='hobbies'>Hobbies</label>
        <div className='flex'>
        <input value={props.hobbie} onChange={(e)=>props.sethobbie(e.target.value)} className='border w-50' name='hobbies'></input>
        <button type='button' onClick={hobbieentry} className='bg-yellow-400 p-1 ml-3 rounded text-white'>Add</button>
        </div>
        <button className='bg-red-300 p-1 mt-4 rouded' type='submit'>Submit</button>
      </form>

      <ul>
  {props.hobbies?.map((val , index) => (
    <li key={index}>{val}</li>
  ))}
</ul>


    </>
  )
}

export default FormComponent