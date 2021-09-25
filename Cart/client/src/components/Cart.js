import React from 'react'
import './cart.css'
const Cart = () => {
    return (
        <>
            <header>
                <div className="nav-bar">
                    <img src="./Images/carts.png" alt="nav" className="nav-icon"/>
                     <h2>Shopping Cart</h2>
                <div className="cart-icon">
                    <img src="./Images/self-collect.png" alt="collection-icon"/>
                    <p>7</p>
                </div>
                </div >
               
            </header>
            <section className="main-menu">
                <h3>
                    The list of items
                </h3>
                <p>
                    You got <span className="cart-item-counter">7</span> items in your cart
                </p>

            </section>
        </>
    )
}

export default Cart
