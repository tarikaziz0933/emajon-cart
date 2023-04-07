import React from 'react';
import { Link } from 'react-router-dom';

const Product = (props) => {
    const { product, handleAddToCart } = props;
    const { name, img, seller, price, ratings } = product;
    return (
        <div
            className=" bg-orange-700 shadow-xl hover:shadow-2xl  flex flex-col justify-between"
        >
            <div>
                <div className="h-64 cursor-zoom-in hover:mask-heart mask">
                    <img src={img} alt="" className="h-full w-full object-cover" />
                </div>
                <div className="mx-3">
                    <h2 className="text-xl font-bold text-orange-200 my-3">
                        {name}
                    </h2>
                    <p className="text-white">
                        {seller}
                    </p>
                </div>
            </div>
            <div className='flex justify-between p-2'>
                <p className="text-slate-300">
                    Price: {price}
                </p>
                <p className="text-slate-300">
                    Ratings: {ratings}
                </p>
            </div>
            <Link to=''>
                <button onClick={() => handleAddToCart(product)} className="m-3 btn btn-outline btn-warning  rounded-none">
                    Add To Cart
                </button>
            </Link>
        </div>
    );
};

export default Product;