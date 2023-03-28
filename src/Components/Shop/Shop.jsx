import React, { useEffect, useState } from 'react';
import CartDetail from '../CartDetail/CartDetail';
import ProductDetail from '../ProductDetail/ProductDetail';
import './Shop.css'
import InfiniteScroll from "react-infinite-scroll-component";

const Shop = () => {
    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState([]);
    const [items, setItems] = useState(6);
    useEffect(() => {
        fetch('products.json')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])
    const handleAddToCart = (product) => {
        // const newCart = [...cart, product];
        // console.log(newCart)
        setCart([...cart, product])
    }
    const fetchMoreData = () => {
        setTimeout(() => {
            setItems(items + 6);
        }, 1000);
    };

    // console.log(products)
    return (
        <div className='shop-container'>
            <InfiniteScroll
                dataLength={items}
                next={fetchMoreData}
                hasMore={items < products.length}
                loader={<h4 style={{ textAlign: 'center' }}>Loading...</h4>}
            >
                <div className='product-container'>
                    {
                        products.slice(0, items).map((product, index) => <ProductDetail
                            product={product}
                            key={index}
                            handleAddToCart={handleAddToCart}></ProductDetail>)
                    }

                </div>

            </InfiniteScroll>

            <div className='cart-container'>

                <CartDetail cart={cart}></CartDetail>
            </div>
        </div>
    );
};

export default Shop;