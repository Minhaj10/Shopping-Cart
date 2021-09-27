import React, { useContext } from "react";
import Product from "./Product";
import { CartContext } from "./Cart";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Itemscontext = () => {
    //toast configure is builtin funtion from react-tostify package,it is used for pop up notification
    toast.configure();

    //getting data & dispach from parent component by context which is created in parent component
    const { item, clearcart, totalitem, totalammount } =
        useContext(CartContext);

    // this is onclick funtion for "checkout" button where we set how our notification will pop up and where
    const notify = () =>
        toast.success("Payment successfully!", {
            position: toast.POSITION.BOTTOM_LEFT,
        });

    return (
        <>
            <header>
                <div className="nav-bar">
                    <img
                        src="./Images/carts.png"
                        alt="nav"
                        className="nav-icon"
                    />
                    <h2>Shopping Cart</h2>
                    <div className="cart-icon">
                        <img
                            src="./Images/self-collect.png"
                            alt="collection-icon"
                        />
                        <p>{totalitem}</p>
                    </div>
                </div>
            </header>
            <section className="main-menu">
                <h3>The list of items</h3>
                <p>
                    You got{" "}
                    <span className="cart-item-counter">{totalitem}</span> items
                    in your cart
                </p>
                <div className="menu-items">
                    <div className="scroll-portion">
                        {/* we are traveling whole array by map..going to each element and passing props to product component and rendering it */}

                        {item.map((curItem) => {
                            return <Product key={curItem.id} {...curItem} />;
                        })}
                    </div>
                </div>

                <div className="card-total">
                    <h3>
                        Cart Total : <span>{totalammount} Taka</span>
                    </h3>
                    <button onClick={notify}>Checkout</button>
                    <button className="clear-cart" onClick={clearcart}>
                        Clear All
                    </button>
                </div>
            </section>
        </>
    );
};

export default Itemscontext;
