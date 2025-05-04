import React, { useEffect, useState } from 'react'
import { useSelector,useDispatch } from 'react-redux'
import { ADD_ITEM,REMOVE_ITEM,INCREASE_QUANTITY,DECREASE_QUANTITY} from './redux/cartSlice'

const App = () => {

  const items = 
    [
      { "id": 1, "name": "Banana", "price": 60 },
      { "id": 2, "name": "Milk", "price": 50 },
      { "id": 3, "name": "Bread", "price": 40 },
      { "id": 4, "name": "Eggs", "price": 90 },
      { "id": 5, "name": "Cheese", "price": 150 },
      { "id": 6, "name": "Detergent", "price": 85 },
      { "id": 7, "name": "Shampoo", "price": 120 },
      { "id": 8, "name": "Toothpaste", "price": 45 },
      { "id": 9, "name": "Tomato", "price": 30 },
      { "id": 10, "name": "Potato", "price": 40 },
      { "id": 11, "name": "Onion", "price": 35 },
      { "id": 12, "name": "Carrot", "price": 50 },
      { "id": 13, "name": "Cucumber", "price": 25 },
      { "id": 14, "name": "Lettuce", "price": 60 },
      { "id": 15, "name": "Peas", "price": 75 },
      { "id": 16, "name": "Ginger", "price": 40 },
      { "id": 17, "name": "Garlic", "price": 45 },
      { "id": 18, "name": "Rice", "price": 80 },
      { "id": 19, "name": "Pasta", "price": 60 },
      { "id": 20, "name": "Oats", "price": 90 },
      { "id": 21, "name": "Sugar", "price": 50 },
      { "id": 22, "name": "Salt", "price": 20 },
      { "id": 23, "name": "Coffee", "price": 150 },
      { "id": 24, "name": "Tea", "price": 80 },
      { "id": 25, "name": "Juice", "price": 100 }
    ]

    const cart = useSelector((i)=>i.cart.cart);
    const dispatch = useDispatch();
    const[openmod,setOpenmod] = useState(false)
    const[quantity,setQuantity] = useState(1);
    const [item , setItem] = useState({
      id:"",
      name:"",
      quantity:quantity,
      price:"",
    })

    useEffect(()=>{
      console.log(cart)
      console.log(item)
    },[])

    const senddata=(id)=>{
      setOpenmod(true)
     const data = items.find((item)=>id===item.id)
     console.log(data);
     setItem({
      id:data.id,
      name:data.name,
      quantity:quantity,
      price:data.price
     })
    }

    const addData=()=>{
      const data = {
        ...item,
        quantity:quantity,
      }
      setItem(
        data
      )
      console.log(data)
      setOpenmod(false)
      dispatch(ADD_ITEM(data))
      setQuantity(1);
    }
    

  return (
    <div>
    <div className='grid grid-cols-5 bg-amber-50 gap-2'>
      {items.map(({id,name,price})=>(
        <div key={id} className='bg-blue-100'>
        <p className='text-2xl'>{name}</p>
        <p>Price : {price}</p>
        <button onClick={()=>senddata(id)} className='border rounded'>Add to cart</button>
       
        </div>
      ))}

      {openmod &&
      <div className='p-8 bg-opacity-70 rounded fixed top-50 left-100 backdrop-blur-sm h-50 w-100 flex flex-col z-50 bg-amber-200 items-center justify-between'>
        Select Quantity:
        <div className=' flex gap-4 items-center justify-center'>
          <button onClick={()=>setQuantity(quantity-1)}>-</button>
          <span>{quantity}</span>
          <button onClick={()=>setQuantity(quantity+1)}>+</button>
        </div>
        <button onClick={addData} className='border w-90'>Add Item</button>
        <button onClick={()=>setOpenmod(false)} className='border w-90'>Close</button>
        </div>
      }
      </div>
      <table className='p-2 '>
        <thead>
          <td>ID</td>
          <td>Item</td>
          <td>Quantity</td>
          <td>Price</td>
        </thead>
          {cart?.items?.map(({id,name,quantity,price})=>(
            <tbody key={id}>
            <td>{id}</td>
            <td>{name}</td>
            <td><button onClick={()=>dispatch(INCREASE_QUANTITY(id))}>+</button>{quantity}<button onClick={()=>dispatch(DECREASE_QUANTITY(id))}>-</button></td>
            <td>${price}</td>
            <td><button className='border' onClick={()=>dispatch(REMOVE_ITEM(id))}>Remove</button></td>
            </tbody>
          ))}
      </table>
          
      <p>Total Amount : {cart.totalAmount}</p>

    </div>
  )
}

export default App