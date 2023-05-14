import { faTrashCan } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './SelectedProduct.css';

const SelectedProduct = (props) => {
    const { product, handleRemoveSelected } = props;
    // console.log(product)
    const { _id, img, name, price, shipping } = product;
    return (
        <div className='selected-product'>
            <img src={img} alt="selected product image" />
            <div className='selected-product-detail'>
                <h4>{name}</h4>
                <p>Price:
                    <span> ${price}</span>
                </p>
                <p>Shipping charge:
                    <span> ${shipping}</span>
                </p>
            </div>
            <button onClick={() => handleRemoveSelected(_id)}>
                <FontAwesomeIcon icon={faTrashCan} beat></FontAwesomeIcon></button>
        </div>
    );
};

export default SelectedProduct;