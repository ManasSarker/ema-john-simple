/* eslint-disable no-unused-vars */
import React from 'react';
import './Cart.css'

const Cart = (props) => {
    // eslint-disable-next-line react/prop-types
    const {cart}=props;
let totalPrice=0;
let totalShipping=0;
for (const product of cart){
    totalPrice+=product.price;
    totalShipping+=product.shipping;
}
const tax=totalPrice*7/100;
const grandTotal=totalPrice+totalShipping+tax;

    return (
        <div className='cart'>
            <h4>Order Summary </h4>
            <p>Selected Items :{cart.length}</p>
            <p>Total Price :${totalPrice}</p>
            <p>Total Shipping :{totalShipping}</p>
             <p>Tax:{tax}</p>
             <h6>Grand Total:{grandTotal}</h6>
        </div>
    );
};

export default Cart;