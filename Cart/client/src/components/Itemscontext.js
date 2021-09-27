import React,{useContext} from 'react'
import {Products} from './data'
import Product from './Product'
import {CartContext} from './Cart'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



const Itemscontext = () => {
    
     toast.configure();
     const {item,clearcart,totalitem,totalammount} = useContext(CartContext)
     const notify = () => toast.success("Payment successfully!",{position: toast.POSITION.BOTTOM_LEFT})


     if(item.length===0){
         return(
             <>
                <header>
                <div className="nav-bar">
                    <img src="./Images/carts.png" alt="nav" className="nav-icon"/>
                     <h2>Shopping Cart</h2>
                    <div className="cart-icon">
                        <img src="./Images/self-collect.png" alt="collection-icon"/>
                        <p>{totalitem}</p>
                    </div>
                </div >
               
            </header>
            <section className="main-menu">
                <h3>
                    The list of items
                </h3>
                <p>
                    You got <span className="cart-item-counter">{totalitem}</span> items in your cart
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
                     <h3>Cart Total : <span>{totalammount} Taka</span></h3>
                     <button  onClick={notify}>Checkout</button>
                     <button className="clear-cart" onClick={clearcart}> Clear All </button>
                </div>
        

            </section>   
             </>
         )
     }
    return (
        <>
         <header>
                <div className="nav-bar">
                    <img src="./Images/carts.png" alt="nav" className="nav-icon"/>
                     <h2>Shopping Cart</h2>
                    <div className="cart-icon">
                        <img src="./Images/self-collect.png" alt="collection-icon"/>
                        <p>{totalitem}</p>
                    </div>
                </div >
               
            </header>
            <section className="main-menu">
                <h3>
                    The list of items
                </h3>
                <p>
                    You got <span className="cart-item-counter">{totalitem}</span> items in your cart
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
                     <h3>Cart Total : <span>{totalammount} Taka</span></h3>
                     <button onClick={notify}>Checkout</button>
                     <button className="clear-cart" onClick={clearcart}> Clear All </button>
                </div>
        

            </section>   
        </>
    )
}

export default Itemscontext
