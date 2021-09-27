import React, { useState, createContext, useReducer, useEffect } from "react";
import "./cart.css";
import { Products } from "./data";
import Itemscontext from "./Itemscontext";
import { reducer } from "./reducer";
import axios from "axios";

//creating a context for passing data to all component
export const CartContext = createContext();

// useReducer intialstate funtion
const initialState = {
    item: Products,
    totalamount: 0,
    totalitem: 0,
};

const Cart = () => {
    //useReducer intialize
    const [state, dispatch] = useReducer(reducer, initialState);

    // passing dispatch to reducer to remove individual item from cart (red delete icon on the right of every item )
    const removeitem = (id) => {
        return dispatch({
            type: "REMOVE_ITEM",
            payload: id,
        });
    };

    //passing dispatch to reducer to clear the whole cart (by pressing "clear all" )
    const clearcart = () => {
        return dispatch({
            type: "CLEAR_CART",
        });
    };

    //passing dispatch to reducer increament of each element in cart ("+" button )
    const increment = (id) => {
        return dispatch({
            type: "INCREMENT",
            payload: id,
        });
    };

    //passing dispatch to reducer decreament of each element in cart ("-" button )
    const decrement = (id) => {
        return dispatch({
            type: "DECREMENT",
            payload: id,
        });
    };

    // using useeffect to pass whole element by dispatch;
    useEffect(() => {
        dispatch({ type: "GET_TOTAL_ITEM" });
    }, [state.item]);

    //binding in context to pass the data from parent component to all the child component(here cartcontext is our context)
    //inside cartcontext we wrap itemcontext component so that "itemcontext" component can get all data from its parent component
    return (
        <>
            <CartContext.Provider
                value={{
                    ...state,
                    removeitem,
                    clearcart,
                    increment,
                    decrement,
                }}>
                <Itemscontext />
            </CartContext.Provider>
        </>
    );
};

export default Cart;
