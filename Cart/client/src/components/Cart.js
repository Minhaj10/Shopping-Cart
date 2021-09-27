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

   const removeitem=(id)=>{
          return dispatch({
              type:"REMOVE_ITEM",
              payload: id,
          });
   };

   const clearcart =()=>{
       return dispatch({
           type:"CLEAR_CART"
       });
   };

    return (
        <>
        <CartContext.Provider value={{...state,removeitem,clearcart}}>
        <Itemscontext/> 
        </CartContext.Provider>
           
        </>
    )
}

export default Cart