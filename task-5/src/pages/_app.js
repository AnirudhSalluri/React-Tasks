import { useEffect, useMemo, useRef, useState } from "react";
import SSGExample from ".";
import axios from "axios";

export default function App(){
  const loadmoreref = useRef();
  const loadlessref = useRef();
  const [data,setdata] = useState([]); 
  const [input,setInput] = useState("");

  const filteredusers = useMemo(()=>{
    if(input==""){
      return data;
    }
    else{
      return data.filter((i)=>i.name?.includes(input))
    }
  },[data,input])



  useEffect(()=>{
     async function fetchdata() {
      const response = await fetch("https://jsonplaceholder.typicode.com/users")
      const users =await response.json();
      setdata(users?.slice(0,5));
    }
    fetchdata();

    loadlessref.current.style.display='none';
  },[])

 const fetchusers=async()=>{
  const response = await axios.get("https://jsonplaceholder.typicode.com/users")
  const users = response.data;
  setdata(users)
   loadlessref.current.style.display='flex'
    loadmoreref.current.style.display='none'
 }

 const loadless=()=>{
  setdata(data.slice(0,4))
   loadlessref.current.style.display='none'
   loadmoreref.current.style.display='flex'
 }

  return (
    <div>
      <h1>User Directory App</h1>
      <input onChange={(e)=>setInput(e.target.value)} value={input} placeholder="Search Users"  />
      <div>
        {data?.map(({id,name,email,address,phone,website})=>(
          <div key={id} >
            <p>Name : {name}</p>
            <p>Email : {email}</p>
            <p>City : {address.city}</p>
          </div>
        ))}
        <button ref={loadmoreref} onClick={fetchusers}>Load More</button>
        <button ref={loadlessref} onClick={loadless}>Load less</button>
      </div>
    </div>
  )
}