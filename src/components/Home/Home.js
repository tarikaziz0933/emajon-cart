import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';

const Home = () => {
    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState([]);

    useEffect(() => {
        fetch('products.json')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])
    const handleAddToCart = (product) => {
        console.log(product);
        const newCart = [...cart, product];
        setCart(newCart);
    }
    return (
        <div className='flex container mx-2'>
            <div className='w-4/5 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 md:w-11/12 mx-auto gap-8 mt-8'>
                {
                    products.map(product => <Product
                        key={product.id}
                        product={product}
                        handleAddToCart={handleAddToCart}
                    ></Product>)
                }
            </div>
            <div className='w-1/5 bg-orange-200'>
                <Cart
                    cart={cart}
                ></Cart>
            </div>
        </div >
    );
};

export default Home;