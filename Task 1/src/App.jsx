import React, { useState } from 'react'
import UserCard from './UserCard'

const App = () => {
  const [visibility,setVisibility] = useState(true);
  let name = "Anirudh";
  let age = 22;
  let location = "Hyderabad";
  let avatar = "https://ui-avatars.com/api/?name=Anirudh+Salluri"
  
  return (
    <div className='flex flex-col gap-4 mt-20 items-center justify-center'>
    {visibility&&<UserCard name={name} age={age} location={location} avatar={avatar} />}
    <button onClick={()=>setVisibility(!visibility)} className='bg-green-600 text-xl '>User Visibilty Button</button>
    </div>
  )
}

export default App