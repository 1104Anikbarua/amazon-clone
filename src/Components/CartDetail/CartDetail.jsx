import React from 'react';
import Button from './Button.jsx/Button';
import './CartDetail.css'
const CartDetail = (props) => {
    // console.log(props)
    const { cart } = props;

    const btnCss = [{ display: 'block', width: '232px', height: '48px', backgroundColor: '#FF3030', borderRadius: '5px', margin: '0 auto 10px auto', border: 'none', color: 'white', fontSize: '16px', name: 'Clear Cart' },
    { display: 'block', width: '232px', height: '48px', backgroundColor: '#FF9900', borderRadius: '5px', margin: '0 auto 10px auto', border: 'none', color: 'white', fontSize: '16px', name: 'Review Order' }];
    return (
        <div>
            <p>Selected Items: {cart.length} </p>
            <p>Total Price: $ </p>
            <p>Total Shipping Charge: $ </p>
            <p>Tax: $ </p>
            <p>Grand Total: $ </p>
            {
                btnCss.map((css, index) => <Button css={css} index={index} key={index}></Button>)
            }
        </div>
    );
};

export default CartDetail;