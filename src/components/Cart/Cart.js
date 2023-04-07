import React from 'react';

const Cart = (props) => {
    const { cart } = props;

    let total = 0;
    let shipping = 0;
    let quantity = 0;
    for (const product of cart) {
        quantity = quantity + product.quantity;
        total = total + product.price * product.quantity;
        shipping = shipping + product.shipping;
    }
    const tax = parseFloat((total * 0.1).toFixed(2));
    const garndTotal = total + shipping + tax;
    return (
        <div className='sticky top-0 pt-4 pl-2'>
            <h1 className='font-bold flex justify-center'>Order Summary</h1>
            <p>Selected Items:{quantity}</p>
            <p>Total Price: ${total}</p>
            <p>Shipping: ${shipping}</p>
            <p>Tax: ${tax}</p>
            <h4>Grand Total: ${garndTotal.toFixed(2)}</h4>
        </div>
    );
};

export default Cart;