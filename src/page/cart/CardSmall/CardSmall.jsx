import React from 'react';
import { Link } from 'react-router-dom';
function CardSmall({ isShowCart, onShowCart, products, onRemoveProduct, onHandleQuatity }) {
    return (
        <>
            {/* PRODUCT */}
            <h1>Cart</h1>
            {products.map(({
                productId,
                cartId,
                product_name,
                product_des,
                product_thumbnail,
                quantity,
                product_price
            }, index) =>
            (
                <div key={index}>
                    <div className='shoppingCartsm' style={{ justifyContent: 'space-between', gridTemplateColumns: '50% 20%' }}>
                        <div className='shoppingCartsm_product' >
                            <>
                                <div className="shoppingCartsm_product--image" >
                                    <img src={product_thumbnail} alt={product_name} />
                                </div>
                                <div className='shoppingCartsm_product--detail' >
                                    <h2 style={{ fontWeight: 'bold' }}>{product_name}</h2>
                                </div>
                            </>

                        </div>
                        <p className='btn-container'>{product_price * quantity} $</p>
                    </div>
                    <hr style={{ margin: '5px 0px' }} />
                </div>


            )
            )}
            <Link to={'/cart'}>
                <button className='cart_checkoutPrice--btn'
                    onClick={() => onShowCart(!isShowCart)}
                >View Detail</button>
            </Link>
        </>
    );
}

export default CardSmall;