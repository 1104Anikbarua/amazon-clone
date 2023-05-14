import React, { useEffect, useState } from 'react';
import CartDetail from '../CartDetail/CartDetail';
import ProductDetail from '../ProductDetail/ProductDetail';
import './Shop.css'
// import InfiniteScroll from "react-infinite-scroll-component";
import { addToDb, getShoppingCart } from '../../../utilities/fakedb';

const Shop = () => {
    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState([]);
    // const [items, setItems] = useState(6);
    // console.log(cart)
    // load product from json 
    useEffect(() => {
        fetch('http://localhost:5000/products')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, []);
    // load stored product id from localstorage 
    useEffect(() => {
        const storedCart = getShoppingCart()
        // console.log(storedCart)
        let storedProduct = [];
        for (const id in storedCart) {
            // console.log(id)
            const productFound = products.find((product) => product._id === id);
            // console.log(productFound)
            if (productFound) {
                const quantity = storedCart[id];
                productFound.quantity = quantity;
                storedProduct.push(productFound);
            }
        }
        // console.log(storedProduct)
        setCart(storedProduct);
    }, [products]);

    // add product and store in cart 
    const handleAddToCart = (product) => {
        setCart([...cart, product])
        addToDb(product._id);
    }
    // const fetchMoreData = () => {
    //     setTimeout(() => {
    //         setItems(items + 6);
    //     }, 1000);
    // };

    // console.log(products)
    return (
        <div className='shop-container'>
            {/* <InfiniteScroll
                dataLength={items}
                next={fetchMoreData}
                hasMore={items < products.length}
                loader={<h4 style={{ textAlign: 'center' }}>Loading...</h4>}
            > */}
            <div className='product-container'>
                {/* products.slice(0, items).map((product, index) => */}
                {
                    products.map((product, index) => <ProductDetail
                        product={product}
                        key={index}
                        handleAddToCart={handleAddToCart}></ProductDetail>)
                }

            </div>

            {/* </InfiniteScroll> */}

            <div className='cart-container'>
                <CartDetail cart={cart}></CartDetail>
            </div>
        </div>
    );
};

export default Shop;