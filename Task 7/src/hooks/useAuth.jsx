import React from 'react'

const useAuth = () => {
    const isLogged = JSON.parse(localStorage.getItem('isLogged'))||false;
    const users = [
        {name:"Anirudh", password:"Ani"},
        {name:"Naveen", password:"Navi"},
        {name:"Sowmya", password:"Sowmi"},
        {name:"Mahesh", password:"Mahi"},
    ]

    const setIsLogged = (data)=>{
        const isLogged = users.some((i)=>i.name===data.name&&i.password===data.password)
            localStorage.setItem('isLogged',JSON.stringify(isLogged))
    }

    const logout =()=>{
        localStorage.setItem('isLogged',JSON.stringify(false))
    }

  return {
        isLogged,
        setIsLogged,
        logout
  }
}

export default useAuth