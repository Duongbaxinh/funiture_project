import { ReactComponent as SvgIconArrowRS } from '../../assets/svg/icon_arrowRS.svg';
import { Link } from 'react-router-dom'
import React from 'react';
import './style.scss'
import { ReactComponent as IconStartA } from '../../assets/svg/icon_startA.svg';
import { ReactComponent as IconArrowL } from '../../assets/svg/icon_arrowL.svg';
const products = [
    {
        product_id: 1,
        product_name: '1.3 Chair',
        product_price: 90000,
        product_thumbnai: 'https://res.cloudinary.com/dwu92ycra/image/upload/v1704167372/Furniture_web/Paste_image_ddv9ls.png'
    },
    {
        product_id: 2,
        product_name: '1.3 Chair',
        product_price: 90000,
        product_thumbnai: 'https://res.cloudinary.com/dwu92ycra/image/upload/v1704169683/Furniture_web/Paste_image_an2jwm.png'
    },
    {
        product_id: 3,
        product_name: '1.3 Chair',
        product_price: 90000,
        product_thumbnai: 'https://res.cloudinary.com/dwu92ycra/image/upload/v1704169741/Furniture_web/Paste_image_zmrrc2.png'
    },
    {
        product_id: 4,
        product_name: '1.3 Chair',
        product_price: 90000,
        product_thumbnai: 'https://res.cloudinary.com/dwu92ycra/image/upload/v1704169741/Furniture_web/Paste_image_zmrrc2.png'
    },
    {
        product_id: 5,
        product_name: '1.3 Chair',
        product_price: 90000,
        product_thumbnai: 'https://res.cloudinary.com/dwu92ycra/image/upload/v1704169741/Furniture_web/Paste_image_zmrrc2.png'
    },
    {
        product_id: 6,
        product_name: '1.3 Chair',
        product_price: 90000,
        product_thumbnai: 'https://res.cloudinary.com/dwu92ycra/image/upload/v1704169741/Furniture_web/Paste_image_zmrrc2.png'
    },
    {
        product_id: 7,
        product_name: '1.3 Chair',
        product_price: 90000,
        product_thumbnai: 'https://res.cloudinary.com/dwu92ycra/image/upload/v1704169741/Furniture_web/Paste_image_zmrrc2.png'
    },
    {
        product_id: 8,
        product_name: '1.3 Chair',
        product_price: 90000,
        product_thumbnai: 'https://res.cloudinary.com/dwu92ycra/image/upload/v1704169741/Furniture_web/Paste_image_zmrrc2.png'
    },
    {
        product_id: 9,
        product_name: '1.3 Chair',
        product_price: 90000,
        product_thumbnai: 'https://res.cloudinary.com/dwu92ycra/image/upload/v1704169741/Furniture_web/Paste_image_zmrrc2.png'
    },
    {
        product_id: 10,
        product_name: '1.3 Chair',
        product_price: 90000,
        product_thumbnai: 'https://res.cloudinary.com/dwu92ycra/image/upload/v1704169741/Furniture_web/Paste_image_zmrrc2.png'
    },
    {
        product_id: 11,
        product_name: '1.3 Chair',
        product_price: 90000,
        product_thumbnai: 'https://res.cloudinary.com/dwu92ycra/image/upload/v1704169741/Furniture_web/Paste_image_zmrrc2.png'
    },
    {
        product_id: 12,
        product_name: '1.3 Chair',
        product_price: 90000,
        product_thumbnai: 'https://res.cloudinary.com/dwu92ycra/image/upload/v1704169741/Furniture_web/Paste_image_zmrrc2.png'
    },
    {
        product_id: 13,
        product_name: '1.3 Chair',
        product_price: 90000,
        product_thumbnai: 'https://res.cloudinary.com/dwu92ycra/image/upload/v1704169741/Furniture_web/Paste_image_zmrrc2.png'
    },

]
function Category(props) {
    return (
        <div
        className='category'>
            <Link>Home</Link> <span> <i><SvgIconArrowRS/></i>Chair&Benches</span>
            <div className='category_linkpage'>
            </div>
            <h1>CHAIRS & BENCHES</h1>
            <div className='Body'>
                <div className='grid_container'>
                {products.map((product,index)=>(
                    <div className={`item${index} content`}>
                        <div className={`item${index}`}>
                    <div>
                        <img src={product.product_thumbnai} alt= '' style={{width:'100%',height:'100%'}}/>
                    <div className='Details'>
                    <IconStartA/>
                    <IconStartA/>
                    <IconStartA/>
                    <IconStartA/>
                    <IconStartA/>
                    <h2>{product.product_name}</h2>
                    <h4>${product.product_price}</h4>
                    </div> 
                    </div>  
                    </div>
                    </div>
                ))}
                </div>
        </div>
        </div>
    );
}

export default Category;