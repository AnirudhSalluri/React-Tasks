import React from 'react'
import { Link, Navigate } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className="bg-gray-800 p-4 flex justify-center space-x-6">
      <Link to="/home" className="text-white text-lg hover:bg-gray-600 px-4 py-2 rounded-md transition duration-300">Home</Link>
      <Link to="/cart" className="text-white text-lg hover:bg-gray-600 px-4 py-2 rounded-md transition duration-300">Cart</Link>
    </div>
  )
}

export default Navbar