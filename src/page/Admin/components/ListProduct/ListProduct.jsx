import React from 'react';
import CardPorduct from '../CardProduct';
import './styles.scss'
function ListProduct({ products }) {
    return (
        <div className='listProduct'>
            <div style={{
                display: 'grid',
                width: '100%',
                gridTemplateColumns: '1fr 1fr 1fr 10%'
            }}>
                <p>Product Name</p>
                <p>Product Image</p>
                <p>Product Price</p>
                <p>Action</p>
            </div>
            {
                products.map((product) => (
                    <CardPorduct product_id={product.id}
                        product_name={product.product_name}
                        prouduct_image={product.product_thumbnail}
                        product_price={product.product_price}
                    />
                ))
            }
        </div >
    );
}

export default ListProduct;