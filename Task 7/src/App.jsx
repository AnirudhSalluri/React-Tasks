import React, { createContext } from 'react'
import { lazy,Suspense } from 'react'
import {BrowserRouter as Router , Routes, Route , Link , useNavigate} from 'react-router-dom'
import Home from './Components/Home'
import Cart from './Components/Cart'
const Product = React.lazy(()=>import ('./Components/Product'))
import Login from './Components/Login'
const Checkout = React.lazy(()=>import('./Components/Checkout'))
import { useEffect } from 'react'
import { useState } from 'react'
import axios from 'axios'
import Navbar from './Components/Navbar'
import ProtectedRoute from './ProtectedRoute'
import {ErrorBoundary} from 'react-error-boundary'
import ErrorBoundaryCom from './Components/ErrorBoundaryCom'
import useAuth from './hooks/useAuth'

export const contextStore = createContext();

const App = () => {
  const navigate = useNavigate();
  const {isLogged,setIsLogged} = useAuth();

  return (
    <div>
      <ErrorBoundary FallbackComponent={ErrorBoundaryCom}>
      <contextStore.Provider value={{isLogged,setIsLogged}}>
        <Navbar/>
        <Routes>
          <Route path='/home' element={
          <Home/>
            }/>
           <Route path='/login' element={<Login/>} />
          <Route path='/cart' element={<Cart/>}/>
          <Route path='/product/:id' element={<Suspense fallback={<>Loading.....</>}><Product/></Suspense>}/>
          <Route path='/checkout' element={<Suspense fallback={<div>Loading....</div>}><ProtectedRoute><Checkout/></ProtectedRoute></Suspense>}/>
        </Routes>
        
      </contextStore.Provider>
      </ErrorBoundary>
    </div>
  )
}

export default App