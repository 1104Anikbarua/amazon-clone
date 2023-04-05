import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import { removeFromDb } from '../../../utilities/fakedb';
import CartDetail from '../CartDetail/CartDetail';
import SelectedProduct from '../SelectedProduct/SelectedProduct';
import './Order.css'

const Orders = () => {
    const products = useLoaderData();
    const [cart, setCart] = useState(products);
    console.log('====>', cart)
    const handleRemoveSelected = (id) => {
        // console.log(id)
        const remaining = cart.filter(product => product.id !== id)
        removeFromDb(id)
        setCart(remaining)
    }
    return (
        <div className='shop-container'>
            <div className='selected-container'>
                {
                    cart.map((product, index) => {
                        return <SelectedProduct
                            handleRemoveSelected={handleRemoveSelected}
                            product={product}
                            key={product.id}></SelectedProduct>
                    })
                }
            </div>
            <div className='cart-container'>
                <CartDetail cart={cart}></CartDetail>
            </div>
        </div>
    );
};

export default Orders;