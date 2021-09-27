import React, { useContext } from "react";
import { CartContext } from "./Cart";

// this component store the data for each item in cart.This component make sure that we dont have to write same code for each element.
// we will write once and call this component using loops

const Product = (props) => {
    //getting data & dispach from parent component by context which is created in parent component
    const { removeitem, increment, decrement } = useContext(CartContext);

    return (
        <>
            <div className="each-item">
                <div className="item-image">
                    <img src={props.imgSrc} alt="clown" />
                </div>
                <div className="product-title">
                    <h2>{props.title}</h2>
                </div>
                <div className="plus-minus-icon">
                    <i
                        className="fas fa-minus minus"
                        onClick={() => decrement(props.id)}></i>
                    <input type="text" placeholder={props.quantity} />
                    <i
                        className="fas fa-plus add"
                        onClick={() => increment(props.id)}></i>
                </div>
                <div className="price">
                    <h3>{props.price} Taka</h3>
                </div>

                <div className="delete">
                    <i
                        className="fas fa-trash-alt delete"
                        onClick={() => removeitem(props.id)}></i>
                </div>
            </div>
            <hr />
        </>
    );
};

export default Product;
