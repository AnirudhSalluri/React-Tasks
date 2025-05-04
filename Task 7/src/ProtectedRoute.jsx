import React, { useEffect } from 'react'
import { Navigate, useNavigate } from 'react-router-dom'
import { contextStore } from './App'
import { useContext } from 'react'

const ProtectedRoute = ({children}) => {
    const {isLogged} = useContext(contextStore); 
    return isLogged?children:<Navigate to='/login' replace/>;

}

export default ProtectedRoute