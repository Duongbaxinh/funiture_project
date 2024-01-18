import React from 'react';
import { ReactComponent as SvgIconCancel } from '../../../assets/svg/icon_cancel.svg';
import QuantityButton from '../../../components/medium/QuantityButton/QuantityButton';
import { Link } from 'react-router-dom';
function CardSmall({ products, onRemoveProduct, onHandleQuatity }) {
    return (
        <>
            {/* PRODUCT */}
            <h1>Cart</h1>
            {products.map(({
                productId,
                product_name,
                product_des,
                product_thumbnail,
                quantity,
                product_price
            }, index) =>
            (
                <div key={index}>
                    <div className='shoppingCart' style={{ justifyContent: 'space-between', gridTemplateColumns: '50% 20%' }}>
                        <div className='shoppingCart_product' >
                            <>
                                <div className="shoppingCart_product--image" >
                                    <img src={product_thumbnail} alt={product_name} />
                                </div>
                                <div className='shoppingCart_product--detail' >
                                    <h2 style={{ fontWeight: 'bold' }}>{product_name}</h2>
                                    <div style={{ display: 'flex', justifyContent: 'flex-start', alignItems: 'center' }}>
                                        <SvgIconCancel
                                            onClick={() => onRemoveProduct(productId)} />
                                        Remove
                                    </div>
                                    <QuantityButton quantity={quantity}
                                        onUp={() => { onHandleQuatity(productId, "up") }}
                                        onDown={() => { onHandleQuatity(productId, "down") }}
                                    />
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
                >CHECKOUT</button>
            </Link>
        </>
    );
}

export default CardSmall;