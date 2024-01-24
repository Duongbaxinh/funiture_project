import React from 'react';
import CardOrder from './CardOrder/CardOrder';

function ListOrder({ isLoadingOrder, setIsLoadingOrder, listOrderData }) {
    return (
        <div className='listorder' style={{ width: '100%' }}>
            <h1>Quản lý đơn hàng</h1>
            <div style={{
                display: 'grid',
                width: '100%',
                padding: '20px 0px',
                fontWeight: '700',
                gridTemplateColumns: '1fr 1fr 1fr  1fr 1fr 1fr 10%'
            }}>
                <p>Order code</p>
                <p>Order Name</p>
                <p>Order Image</p>
                <p>Order State</p>
                <p>Order Quanity</p>
                <p>Order Price</p>
                <p>Action</p>
            </div>
            <ul className='listorder_item'>
                {listOrderData.map((order, index) => (
                    <CardOrder key={index} order={order}
                        isLoadingOrder={isLoadingOrder}
                        setIsLoadingOrder={setIsLoadingOrder}
                    />
                ))}
            </ul>
        </div>
    );
}

export default ListOrder;