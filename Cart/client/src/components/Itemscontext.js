import React,{useContext} from 'react'
import {Products} from './data'
import Product from './Product'
import {CartContext} from './Cart'

const Itemscontext = () => {
    

     const {item} = useContext(CartContext)
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
                <div className="menu-items">
                    <div className="scroll-portion">
                        {
                            item.map((curItem)=>{
                                return   <Product key={curItem.id}{...curItem}/>

                            })
                        }
                   
                       </div>
                 </div>    
                
                <div className="card-total">
                     <h3>Cart Total : <span>400 Taka</span></h3>
                     <button>Checkout</button>
                </div>
        

            </section>   
        </>
    )
}

export default Itemscontext
