import React,{useState,createContext,useReducer, useEffect} from 'react'
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
           type:"CLEAR_CART",
        
       });
   };

   const increment=(id)=>{
    return dispatch({
        type:"INCREMENT",
        payload: id,
    });
};

const decrement=(id)=>{
    return dispatch({
        type:"DECREMENT",
        payload: id,
    });
};

useEffect(() => {
    dispatch({type: "GET_TOTAL_ITEM"});
}, [state.item])



    return (
        <>
        <CartContext.Provider value={{...state,removeitem,clearcart,increment,decrement}}>
        <Itemscontext/> 
        </CartContext.Provider>
           
        </>
    )
}

export default Cart