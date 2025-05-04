import axios from 'axios'
import React,{useEffect,useMemo,useState} from 'react'
import { useNavigate } from 'react-router-dom'
import useCart from '../hooks/useCart'


const Home = () => {
  const [name,setname] = useState("");

  const {addtocart} = useCart();
    const navigate = useNavigate();
    const [data,setdata] = useState([])
    useEffect(()=>{
      const getfetch =async ()=>{
        const items = await axios.get('https://dummyjson.com/products');
        console.log(items.data.products);
        setdata(items.data.products);
      }
      getfetch();
    },[])
    const navigationfun=(id)=>{
        navigate(`/product/${id}`);
    }

    const Addtocart=(id)=>{
      const cartitem = data?.find((i)=>i.id===id);
      addtocart(cartitem) 
    }

    const filteredSearch = useMemo(()=>{
      if(name===""){
        return data
      }
      else{
        return data?.filter((i)=>i.title.includes(name))
      }
    },[name,data])
   
  return (
    <div>
      <div className="flex justify-center my-6">
  <input
    onChange={(e) => setname(e.target.value)}
    value={name}
    name="searchitem"
    placeholder="Search..."
    className="w-full max-w-md px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent transition duration-200"
  />
</div>
        <div className='grid grid-cols-4 bg-amber-100 gap-4 p-3'>
            {filteredSearch?.map(({id,images,title,price,description,category})=>(
                <div  className='p-1 flex flex-col items-center justify-center bg-emerald-50' key={id}>
                <img onClick={()=>navigationfun(id)} src={images[0]} alt='Product Image' />
                <h2 className='text-2xl text-center font-bold text-amber-900'>{title}</h2>
                <p className='text-sm text-cyan-700'>Category : {category}</p>
                <p className='text-xl text-emerald-700'>Price : ${price}</p>
                <button onClick={()=>Addtocart(id)} className='border bg-blue-300 p-2'>Add to Cart</button>
                </div>
            ))}
        </div>
    </div>
  )
}

export default Home