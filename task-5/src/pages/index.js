import axios from "axios"
import { useEffect } from "react"

export async function getStaticProps(){
  const response =await axios.get("https://jsonplaceholder.typicode.com/users")
  const users = response.data
  const datausers = users.slice(0,5)
  return {
    props:{
      datausers
    }
  }
}

export default function SSGExample({datausers}){

  
  return (
    <div>
      <h1>Used SSG </h1>
    {data?.map(({id,name,email,address,phone,website})=>(
      <div key={id} >
        <p>Name : {name}</p>
        <p>Email : {email}</p>
        <p>City : {address.city}</p>
      </div>
    ))}
    </div>
  )
}