import React,{useState,createContext,useReducer} from 'react'
import './cart.css'
import {Products} from './data'
import Itemscontext from './Itemscontext'
import { reducer } from './reducer'



export const CartContext= createContext();

const initialState={
   item:Products,
   totalamount:0,
   totalitem:0,

};
const Cart = () => {
   const [state, dispatch] = useReducer(reducer, initialState)
    return (
        <>
        <CartContext.Provider value={{...state}}>
        <Itemscontext/> 
        </CartContext.Provider>
           
        </>
    )
}

export default Cart