import React from 'react';
import { ReactComponent as SvgIconCancel } from '../../assets/svg/icon_cancel.svg';
import QuantityButton from '../../components/medium/QuantityButton/QuantityButton';
import './styles.scss';
const titles = ['Product', 'Quantity', 'Price', 'Subtotal']
function ShoppingCart({ products, onHandleQuatity, onRemoveProduct }) {
    return (
        <>
            {/* TITLE */}
            <div className='shoppingCart'>
                {titles.map((title, index) => <p key={index}
                    className='shoppingCart_title'>{title}</p>)}
            </div>
            <hr style={{ margin: '10px 0px' }} />
            {/* PRODUCT */}
            {products.map(({
                productId,
                cartId,
                product_name,
                product_des,
                product_thumbnail,
                quantity,
                product_price, product_type
            }, index) =>
            (
                <div key={index}>
                    <div className='shoppingCart'>
                        <div className='shoppingCart_product'>
                            <div className="shoppingCart_product--image">
                                <img src={product_thumbnail} alt={product_name} />
                            </div>
                            <div className='shoppingCart_product--detail'>
                                <h2 style={{ fontWeight: 'bold' }}>{product_name}</h2>
                                <p>Type:{product_type}</p>
                                <div style={{ display: 'flex', justifyContent: 'flex-start', alignItems: 'center' }}>
                                    <SvgIconCancel
                                        onClick={() => onRemoveProduct(productId, cartId)} />
                                    Remove
                                </div>
                            </div>
                        </div>
                        <QuantityButton quantity={quantity}
                            onUp={() => { onHandleQuatity(productId, "up") }}
                            onDown={() => { onHandleQuatity(productId, "down") }}
                        />
                        <p className='btn-container'>{Number(product_price)}$</p>
                        <p className='btn-container'>{Number(product_price) * Number(quantity)} $</p>
                    </div>
                    <hr style={{ margin: '5px 0px' }} />
                </div>


            )
            )}
        </>



    );
}

export default ShoppingCart;