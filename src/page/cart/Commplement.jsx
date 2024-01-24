import React from 'react';
import { CartContextState } from '../../context/ProductCartContext';
import { Link } from 'react-router-dom';
function Commplement(props) {
    const { ordered } = CartContextState()
    console.log('check order at complete', ordered)
    return (
        <div className='complement'>
            <h1>Thank you! 🎉</h1>
            <h1>Your order has been received</h1>
            <div className='complement_info'>
                <div className='complement_info--item'>
                    <p>Order code</p>
                    <p>{ordered.orderCode}</p>
                </div>
                <div className='complement_info--item'>
                    <p>Date</p>
                    <p>{ordered.date}</p>
                </div>
                <div className='complement_info--item'>
                    <p>Total</p>
                    <p>{ordered.total}</p>
                </div>
                <div className='complement_info--item'>
                    <p>Payment Method</p>
                    <p>{ordered.paymentMethod}</p>
                </div>
            </div>
            <Link to={'/purchase'}>
                <button className='cart_checkoutPrice--btn' style={{ width: "150px" }}
                >PURCHASE HISTORY</button>
            </Link>

        </div >
    );
}

export default Commplement;