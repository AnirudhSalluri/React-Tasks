import {createSlice} from '@reduxjs/toolkit'
import React from 'react'

const cartSlice = createSlice({
    name:'cart',
    initialState:{
        cart:JSON.parse(localStorage.getItem('cart')) || {items:[],totalAmount:0}
    },
    reducers:{
        ADD_ITEM :(state,action)=>{
            if(state.cart.items.find((i)=>i.id===action.payload.id)){
                return alert("Already Item is in the Cart")
            }
            else{
            state.cart.items.push(action.payload)
             state.cart.totalAmount=state.cart.items.reduce((item1,item2)=>{ 
                return item1+(item2.quantity*item2.price)
            },0)
            localStorage.setItem('cart',JSON.stringify({items:state.cart.items,totalAmount:state.cart.totalAmount}))
        }
        },
        REMOVE_ITEM:(state,action)=>{
            state.cart.items=state.cart.items.filter((i)=>{
               return i.id!==action.payload
            })
            state.cart.totalAmount=state.cart.items.reduce((item1,item2)=>{ 
                return item1+(item2.quantity*item2.price)
            },0)
            localStorage.setItem('cart',JSON.stringify({items:state.cart.items,totalAmount:state.cart.totalAmount}))
        },
        INCREASE_QUANTITY:(state,action)=>{
            const item = state.cart.items.find((i)=>i.id===action.payload)
            item.quantity=item.quantity+1;
            state.cart.totalAmount=state.cart.items.reduce((item1,item2)=>{ 
                return item1+(item2.quantity*item2.price)
            },0)
            localStorage.setItem('cart',JSON.stringify({items:state.cart.items,totalAmount:state.cart.totalAmount}))
        },
        DECREASE_QUANTITY:(state,action)=>{
            const item = state.cart.items.find((i)=>i.id===action.payload)
            item.quantity=item.quantity-1;
            state.cart.totalAmount=state.cart.items.reduce((item1,item2)=>{ 
                return item1+(item2.quantity*item2.price)
            },0)
            localStorage.setItem('cart',JSON.stringify({items:state.cart.items,totalAmount:state.cart.totalAmount}))
        }

    }
})
export const {ADD_ITEM,REMOVE_ITEM,INCREASE_QUANTITY,DECREASE_QUANTITY} = cartSlice.actions;
export default cartSlice.reducer