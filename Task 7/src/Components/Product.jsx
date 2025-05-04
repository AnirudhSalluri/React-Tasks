import axios from 'axios'
import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import { useParams } from 'react-router-dom'

const Product = () => {
    const [item,setItem] = useState({});
    const {id} = useParams();
    useEffect(()=>{
        const getdata=async ()=>{
        const data = await axios.get(`https://dummyjson.com/products/${id}`);
        console.log(data.data)
        setItem(data.data)
        }

        getdata();

    },[])
    // {id,images,descripiton,category,price,rating,title,reviews})
  return (
    <div className=" rounded-xl  shadow-lg bg-white p-4 ">
    <img src={item.images?.[0]} alt={item.title} className="w-full  object-cover rounded-md" />
    <div className="mt-4">
      <h2 className="text-xl font-bold text-gray-800">{item.title}</h2>
      <p className="text-gray-600 mt-1">{item.description}</p>
      <p className="mt-2 text-sm text-blue-700">Category: {item.category}</p>
      <p className="mt-1 text-lg font-semibold text-green-600">${item.price}</p>
        <span className="text-yellow-500">⭐ {item.rating}</span>
        <div className="mt-4">
  <h3 className="text-md font-semibold text-gray-700 mb-2">Reviews:</h3>
  <div className="space-y-2">
    {item.reviews?.map(({ comment, rating }, index) => (
      <div key={index} className="bg-gray-100 p-2 rounded-md">
        <p className="text-sm text-gray-800">{comment}</p>
        <p className="text-xs text-yellow-600">⭐ {rating}</p>
      </div>
    ))}
</div>
      </div>
    </div>
    <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-md shadow-md transition duration-200">
  Add to Cart
</button>
  </div>
  )
}

export default Product