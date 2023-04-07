import React from 'react';

const ReviewItem = ({ product, handleRemoveItem }) => {
    const { id, name, price, quantity, img } = product;
    return (
        <div className='flex my-4 bg-orange-200 mx-5'>
            <div className='flex justify-center'>
                <img className='w-20' src={img} alt="" />
            </div>
            <div className='flex container justify-between'>
                <div>
                    <p>{name}</p>
                    <p><small>Price: {price}</small></p>
                    <p><small>Quantity: {quantity}</small></p>
                </div>
                <div className='flex justify-center items-center mx-4'>
                    <button onClick={() => handleRemoveItem(id)} className='btn btn-error'>Delete</button>
                </div>
            </div>
        </div>
    );
};

export default ReviewItem;