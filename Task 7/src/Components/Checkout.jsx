import React, { useEffect } from 'react';
import useCart from '../hooks/useCart';
import { useNavigate } from 'react-router-dom';
import useAuth from '../hooks/useAuth';

const Checkout = () => {
  const { cart } = useCart();
  const navigate = useNavigate();
  const {logout}=useAuth();

  const orderplaced=()=>{
    alert("Order placed Succesfully")
    localStorage.removeItem("cart");
    navigate('/home')
  }

  // useEffect(()=>{
  //     throw new Error("It is an Error Loading");
  // },[])
  const logouttrigger=()=>{
    logout();
    navigate('/login')
  }

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg p-6">
        <h2 className="text-2xl font-bold text-gray-800 mb-6">Checkout</h2>

        <div className="mt-6 flex justify-between items-center border-t pt-4">
          <h3 className="text-xl font-bold text-gray-800">Total:</h3>
          <span className="text-xl font-bold text-green-700">
            ₹{cart?.cart?.totalAmount}
          </span>
        </div>

        <button
          onClick={orderplaced}
          className="mt-6 w-full bg-green-600 hover:bg-green-700 text-white py-3 rounded-md text-lg"
        >
          Confirm Order
        </button>

        <button
          onClick={() => navigate('/cart')}
          className="mt-3 w-full text-blue-600 hover:underline text-sm"
        >
          Back to Cart
        </button>
        <button
          onClick={logouttrigger}
          className="mt-3 w-full text-red-600 hover:underline text-sm"
        >
          Logout
        </button>
      </div>
    </div>
  );
};

export default Checkout;
