import React, { useEffect, useRef } from 'react'
import {useForm} from 'react-hook-form'
import {contextStore} from '../App'
import { useContext } from 'react'
import { useNavigate } from 'react-router-dom'

const Login = () => {
  const Inputref = useRef();

  const {isLogged,setIsLogged} = useContext(contextStore)
  const navigate = useNavigate();

  useEffect(()=>{
      Inputref.current.focus();
  },[])

    const{register,handleSubmit,formState:{errors},reset} = useForm();
    const onSubmit=(data)=>{
        setIsLogged(data);
        navigate('/checkout')
    }
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
  <form
    className="bg-white shadow-md rounded-xl p-8 w-full max-w-sm flex flex-col gap-4"
    onSubmit={handleSubmit(onSubmit)}
  >
    <h2 className="text-2xl font-semibold text-center text-gray-800 mb-2">Login</h2>

    <input
      {...register('name')}
      ref={(e) => {
        register('name').ref(e);
        Inputref.current = e;
      }}
      type="text"
      placeholder="Enter your username"
      className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
    />

    <input
      type="password"
      {...register('password')}
      placeholder="Enter your password"
      className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
    />

    <button
      type="submit"
      className="bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-md font-medium transition duration-200"
    >
      Log In
    </button>
  </form>
</div>

  )
}

export default Login