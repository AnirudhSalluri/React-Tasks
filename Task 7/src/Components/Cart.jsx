import React,{useState,useEffect}from 'react'
import useCart from '../hooks/useCart'
import { useNavigate } from 'react-router-dom';

const Cart = () => {

  const navigate = useNavigate();

  const {cart,removeitem} = useCart();
  useEffect(()=>{
    console.log(cart)
  },[])

  return (
    <div className="min-h-screen bg-amber-50 p-6">
  <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-6">
    
    
    <div className="md:col-span-3 bg-white rounded-xl shadow-md p-4 space-y-4">
      {cart?.cart?.items.length===0?<div className='text-2xl text-center'>Cart is Empty</div>:cart?.cart?.items.map(({ id, images, title, price, description, category, quantity }) => (
        <div
          key={id}
          className="flex items-center gap-4 bg-emerald-50 p-4 rounded-lg hover:shadow"
        >
          <img src={images[0]} alt="Product" className="w-24 h-24 object-cover rounded-md" />
          
          <div className="flex-1">
            <h2 className="text-xl font-bold text-amber-900">{title}</h2>
            <p className="text-sm text-cyan-700">Category: {category}</p>
            <p className="text-lg text-emerald-700 font-semibold">Price: ₹{price}</p>
            
            {/* Quantity Controls */}
            <div className="flex items-center mt-2 space-x-3">
              <button
                onClick={() => decrement(id)}
                className="bg-gray-300 px-2 py-1 rounded-md text-lg font-bold"
              >
                −
              </button>
              <span className="text-md font-medium">{quantity}</span>
              <button
                onClick={() => increment(id)}
                className="bg-gray-300 px-2 py-1 rounded-md text-lg font-bold"
              >
                +
              </button>
            </div>
          </div>

          <button
            onClick={() => removeitem(id)}
            className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-md"
          >
            Remove
          </button>
        </div>
      ))}
    </div>

    {/* Order Summary */}
    <div className="bg-white rounded-xl shadow-md p-6 flex flex-col justify-between">
      <div>
        <h3 className="text-2xl font-semibold mb-4 text-gray-800">Order Summary</h3>
        <p className="text-lg text-gray-700 mb-6">
          Total Amount: <span className="text-green-600 font-bold">₹{cart?.cart?.totalAmount}</span>
        </p>
      </div>
      <button
        onClick={() => navigate('/checkout')}
        className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-md text-lg font-medium"
      >
        Proceed to Checkout
      </button>
    </div>
  </div>
</div>

  )
}

export default Cart