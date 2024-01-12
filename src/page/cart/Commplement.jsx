import React from 'react';
const inforOrder = {
    orderCode: '#123456789',
    date: Date.now(),
    total: '1.500$',
    paymentMethod: 'Credit Card',

}
function Commplement(props) {
    return (
        <div className='complement'>
            <h1>Thank you! 🎉</h1>
            <h1>Your order has been received</h1>
            <div className='complement_info'>
                <div className='complement_info--item'>
                    <p>Order code</p>
                    <p>{inforOrder.orderCode}</p>
                </div>
                <div className='complement_info--item'>
                    <p>Date</p>
                    <p>{inforOrder.date}</p>
                </div>
                <div className='complement_info--item'>
                    <p>Total</p>
                    <p>{inforOrder.total}</p>
                </div>
                <div className='complement_info--item'>
                    <p>Payment Method</p>
                    <p>{inforOrder.paymentMethod}</p>
                </div>
            </div>
            <button className='cart_checkoutPrice--btn' style={{ width: "150px" }}
            >PURCHASE HISTORY</button>
        </div >
    );
}

export default Commplement;