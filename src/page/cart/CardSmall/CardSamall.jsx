import React from 'react';
import { ReactComponent as SvgIconCancel } from '../../../assets/svg/icon_cancel.svg';
import QuantityButton from '../../../components/medium/QuantityButton/QuantityButton';
function CardSamall({ products, onRemoveProduct, onHandleQuatity }) {
    return (
        <>
            {/* PRODUCT */}
            {products.map(({
                product_id,
                product_name,
                product_des,
                product_thumbnai,
                product_quanity,
                product_price
            }, index) =>
            (
                <div key={index}>
                    <div className='shoppingCart' style={{ justifyContent: 'space-between', gridTemplateColumns: '50% 20%' }}>
                        <div className='shoppingCart_product' >
                            <>
                                <div className="shoppingCart_product--image" >
                                    <img src={product_thumbnai} alt={product_name} />
                                </div>
                                <div className='shoppingCart_product--detail' >
                                    <h2 style={{ fontWeight: 'bold' }}>{product_name}</h2>
                                    <p>Color:{product_des}</p>
                                    <div style={{ display: 'flex', justifyContent: 'flex-start', alignItems: 'center' }}>
                                        <SvgIconCancel
                                            onClick={() => onRemoveProduct(product_id)} />
                                        Remove
                                    </div>
                                    <QuantityButton product_quanity={product_quanity}
                                        onUp={() => { onHandleQuatity(product_id, "up") }}
                                        onDown={() => { onHandleQuatity(product_id, "down") }}
                                    />
                                </div>
                            </>

                        </div>
                        <p className='btn-container'>{product_price * product_quanity} $</p>
                    </div>
                    <hr style={{ margin: '5px 0px' }} />
                </div>


            )
            )}
            <button className='cart_checkoutPrice--btn'

            >CHECKOUT</button>
        </>
    );
}

export default CardSamall;