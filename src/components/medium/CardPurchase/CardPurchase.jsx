import React from 'react';
import './styles.scss'
import { Link } from 'react-router-dom';
function CardPurchase({ product_id, product_name, product_thumbnail, product_des, order_quantity, order_total_price, order_state }) {
    return (
        <div className='cardpurchase'>
            <div className="cardpurchase_img">
                <img src={product_thumbnail} alt="" />
            </div>
            <div className="cardpurchase_info">
                <h2>{product_name}</h2>
                <p className='cardpurchase_info--des'>{product_des}</p>
                <p>Quantity   : X{order_quantity}</p>
                <h2>{order_total_price}$</h2>
            </div>
            {(order_state !== 'canceled') ?
                <div className="cardpurchase_action">
                    <button>Huỷ</button>
                </div> : (
                    <div className="cardpurchase_action">
                        <Link to={`/product/${product_id}`}><button>Mua Lại</button></Link>
                    </div>)}
        </div>
    );
}

export default CardPurchase;