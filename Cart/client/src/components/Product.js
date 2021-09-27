import React,{useContext} from 'react'
import {CartContext} from './Cart'

const Product = (props) => {

  const { removeitem } = useContext(CartContext)

  
    return (
       <>
                
                <div className="each-item">
                        <div className="item-image">
                                  <img src= {props.imgSrc} alt="clown"/>
                              </div>
                              <div className="product-title">
                                  <h2>{props.title}</h2>
                              </div>
                              <div className="plus-minus-icon">
                                <i className="fas fa-minus minus"></i>
                                <input type="text" placeholder="2"/>
                                <i className="fas fa-plus add"></i>
                              </div>
                              <div className="price">
                            <h3>{props.price}</h3>
                              </div>

                              <div className="delete">
                              <i className="fas fa-trash-alt delete" onClick={()=> removeitem(props.id)}></i>
                         </div>
                </div>
                <hr/>
                
        </>
    );
};

export default Product;