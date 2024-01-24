import React from 'react';
import './styles.scss'
function CardShop({ banner_img, banner_title, banner_des, banner_price }) {
    return (
        <div className='cardshop'>
            <div className="cardshop_context">
                <h1>{banner_title}</h1>
                <p className='cardshop_context--des'>{banner_des}</p>
                <button className='cardshop_context--btn'>Detail</button>
            </div>
            <div className="cardshop_img">
                <img src={banner_img} alt="" />
            </div>
        </div >
    );
}

export default CardShop;