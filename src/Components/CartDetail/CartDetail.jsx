import React from 'react';
import Button from './Button.jsx/Button';
import './CartDetail.css'
const CartDetail = (props) => {
    // console.log(props)
    const { cart } = props;
    // console.log(cart)

    const btnCss = [{ display: 'block', width: '232px', height: '48px', backgroundColor: '#FF3030', borderRadius: '5px', margin: '0 auto 10px auto', border: 'none', color: 'white', fontSize: '16px', name: 'Clear Cart' },
    { display: 'block', width: '232px', height: '48px', backgroundColor: '#FF9900', borderRadius: '5px', margin: '0 auto 10px auto', border: 'none', color: 'white', fontSize: '16px', name: 'Review Order' }];

    let totalPrice = 0;
    let shippingPrice = 0;
    let quantity = 0;

    for (const product of cart) {
        // console.log(product)
        if (product.quantity === 0) {
            product.quantity = 1;
        }
        // product.quantity = product.qunatity || 1;

        // console.log(product)
        totalPrice = totalPrice + product?.price * product?.quantity;
        shippingPrice = shippingPrice + product?.shipping;
        quantity = quantity + product?.quantity;
    }
    // console.log(totalPrice)
    const tax = totalPrice * 7 / 100
    // console.log(tax)
    const grandTotal = totalPrice + shippingPrice + tax;
    return (
        <div>
            <h3>Order summary</h3>
            <p>Selected Items: {quantity} </p>
            <p>Total Price: $ {totalPrice}</p>
            <p>Total Shipping Charge: $ {shippingPrice}</p>
            <p>Tax: $ {tax.toFixed(2)}</p>
            <p>Grand Total: $ {grandTotal.toFixed(2)}</p>
            {
                btnCss.map((css, index) => <Button css={css} index={index} key={index}></Button>)
            }
        </div>
    );
};

export default CartDetail;