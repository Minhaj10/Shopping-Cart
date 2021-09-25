import React from 'react'

const Product = () => {
    return (
       <>
           <div className="scroll-portion">
                <div className="each-item">
                        <div className="item-image">
                                  <img src= "https://www.mobiledokan.com/wp-content/uploads/2020/02/Samsung-Galaxy-M31.jpg" alt="item1"/>
                              </div>
                              <div className="product-title">
                                  <h2>Samsung M31</h2>
                              </div>
                              <div className="plus-minus-icon">
                                <i class="fas fa-minus minus"></i>
                                <input type="text" placeholder="2"/>
                                <i class="fas fa-plus add"></i>
                              </div>
                              <div className="price">
                              <h3>200Taka</h3>
                              </div>

                              <div className="delete">
                              <i class="fas fa-trash-alt delete"></i>
                         </div>
                </div>
                </div>
                <hr/> 
        </>
    );
};

export default Product;
