import React, { useCallback } from 'react'
import {useDispatch,useSelector} from 'react-redux'
import { ADD_ITEM,REMOVE_ITEM,INCREASE_QUANTITY,DECREASE_QUANTITY } from '../redux/cartSlice'

const useCart = () => {
    const cart = useSelector((i)=>i.cart);
    const dispatch = useDispatch();

    const addtocart = useCallback((item)=>{
        dispatch(ADD_ITEM(item))
    },[dispatch])
    
    const removeitem = useCallback((id)=>{
        dispatch(REMOVE_ITEM(id))
    },[dispatch])

    const increaseQuantity=useCallback((id)=>{
        dispatch(INCREASE_QUANTITY(id))
    },[dispatch])

    const decreaseQuantity=useCallback((id)=>{
        dispatch(DECREASE_QUANTITY(id))
    },[dispatch])


  return {
        cart,
        addtocart,
        removeitem,
        increaseQuantity,
        decreaseQuantity
  }
}

export default useCart