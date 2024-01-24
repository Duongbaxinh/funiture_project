import React from 'react';
import { Link } from 'react-router-dom';
import './styles.scss'
function CardProduct({ product }) {
    return (
        <div className="content">
            <div >
                <div className="images">
                    <img src={product.product_thumbnail.trim()} alt='' style={{ width: '100%', height: '100%' }} />
                </div>
                <div className='details'>
                    <h2>{product.product_name}</h2>
                    <p className='details_des'>{product.product_des}</p>
                    <h2>${product.product_price}</h2>
                </div>
            </div>
            <div className="item_over">
                <Link to={`/product/${product.id} `}>
                    <button>View Detail</button>
                </Link>
            </div>
        </div>
    );
}

export default CardProduct;