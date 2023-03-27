import { faCartPlus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './ProductDetail.css'

const ProductDetail = (props) => {
    // console.log(props)
    const { product, handleAddToCart } = props;
    const { img, name, price, ratings, seller } = product
    return (
        <div className='card'>
            <div className='card-img'>
                <img src={img} alt="" />
            </div>
            <h3 className='card-name'>{name}</h3>
            <h5 className='card-price'>Price: ${price}</h5>
            <p>Manufacturer: {seller}</p>
            <p>Rating: {ratings}</p>
            <button
                onClick={() => handleAddToCart(product)}
                className='card-btn'>
                Add To Cart
                <FontAwesomeIcon className='facart' icon={faCartPlus} beat />
            </button>
        </div>
    );
};

export default ProductDetail;