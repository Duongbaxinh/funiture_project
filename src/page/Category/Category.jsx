import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Myy_Image from '../../assets/images/Header.jpg';
import Footer from '../../assets/images/Newsletter.png';
import { ReactComponent as IconArrowL } from '../../assets/svg/icon_arrowL.svg';
import { ReactComponent as IconStartA } from '../../assets/svg/icon_startA.svg';
import "./style.scss";

import axios from 'axios';

const categories = [
    { title: 'Novelties', id: '1', type: 'nove' },
    { title: 'Chairs & Benches', id: '2', type: 'chair' },
    { title: 'Tables', id: '3', type: 'nove' },
    { title: 'Sofas', id: '4', type: 'nove' },
    { title: 'Beds', id: '5', type: 'nove' },
    { title: 'Starage & Shelves', id: '6', type: 'nove' },
    { title: 'Office', id: '7', type: 'nove' },
    { title: 'Lamps', id: '8', type: 'nove' },

]
const products = [
    {
        product_id: 1,
        product_name: '1.3 Chair',
        product_price: 69.90,
        product_thumbnai: 'https://res.cloudinary.com/dwu92ycra/image/upload/v1704167372/Furniture_web/Paste_image_ddv9ls.png'
    },
    {
        product_id: 2,
        product_name: 'Kuyu Desk',
        product_price: 69.90,
        product_thumbnai: 'https://res.cloudinary.com/dwu92ycra/image/upload/v1704169683/Furniture_web/Paste_image_an2jwm.png'
    },
    {
        product_id: 3,
        product_name: 'Neat Noon',
        product_price: 69.90,
        product_thumbnai: 'https://res.cloudinary.com/dwu92ycra/image/upload/v1704169683/Furniture_web/Paste_image_an2jwm.png'
    },
    {
        product_id: 4,
        product_name: '1.3 Chair',
        product_price: 69.90,
        product_thumbnai: 'https://res.cloudinary.com/dwu92ycra/image/upload/v1704169683/Furniture_web/Paste_image_an2jwm.png'
    },
    {
        product_id: 5,
        product_name: 'Morph',
        product_price: 69.90,
        product_thumbnai: 'https://res.cloudinary.com/dwu92ycra/image/upload/v1704169683/Furniture_web/Paste_image_an2jwm.png'
    },
    {
        product_id: 6,
        product_name: '1.3 Chair',
        product_price: 69.90,
        product_thumbnai: 'https://res.cloudinary.com/dwu92ycra/image/upload/v1704169683/Furniture_web/Paste_image_an2jwm.png'
    },
    {
        product_id: 7,
        product_name: 'BONDT - round',
        product_price: 69.90,
        product_thumbnai: 'https://res.cloudinary.com/dwu92ycra/image/upload/v1704169683/Furniture_web/Paste_image_an2jwm.png'
    },
    {
        product_id: 8,
        product_name: '1.3 Chair',
        product_price: 69.90,
        product_thumbnai: 'https://res.cloudinary.com/dwu92ycra/image/upload/v1704169683/Furniture_web/Paste_image_an2jwm.png'
    },
    {
        product_id: 9,
        product_name: '1.3 Chair',
        product_price: 69.90,
        product_thumbnai: 'https://res.cloudinary.com/dwu92ycra/image/upload/v1704169683/Furniture_web/Paste_image_an2jwm.png'
    },
]
function Category(props) {
    const [currentCategory, setCurrentCategory] = useState('chair')
    const [productCategory, setProductCategory] = useState([])
    const [isLoading, setisLoading] = useState(false)
    const handleCategory = (value) => {
        setCurrentCategory(value)
    }
    useEffect(() => {
        setisLoading(true)
        const fetchProduct = async () => {
            const data = await axios.get(`http://localhost:8080/api/v1/product/${currentCategory}`)
            console.log('check data ', data)
            setProductCategory(data.data.metadata)
        }
        fetchProduct()
        setisLoading(false)
    }, [currentCategory])
    if (isLoading) return <h1>Loading....</h1>
    return (
        <div className='category'>
            <div className='aa' style={{ display: 'flex', alignItems: 'center' }}>
                <h3 className='home' style={{ color: 'grey' }}>Home</h3>
                <IconArrowL />
                <h3 className='text2'>Chairs & Benches</h3>
            </div>
            <div className='Header'>
                <img src={Myy_Image} alt='' style={{ width: '100%', height: '200px', paddingBottom: '20px' }} />
            </div>

            <div className='Body'>
                <div className='list' style={{}}>
                    {categories.map((item, index) => (
                        <div onClick={() => handleCategory(item.type)}><p>{item.title}</p></div>
                    ))}
                </div>
                <div className='grid_container'>
                    {productCategory.map((product, index) => (
                        <div className={`item${index} content`}>
                            <div className={`item${index}`}>
                                <Link to={`/product/${product.id}`}>
                                    <img src={product.product_thumbnail} alt='' style={{ width: '100%', height: '100%' }} />
                                    <div className='Details'>
                                        <IconStartA />
                                        <IconStartA />
                                        <IconStartA />
                                        <IconStartA />
                                        <IconStartA />
                                        <h2>{product.product_name}</h2>
                                        <h4>${product.product_price}</h4>
                                    </div>
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>

            </div>
            <div className='Footer'>
                <img src={Footer} alt='' style={{ width: '100%', height: '200px' }} />
            </div>
        </div>
    );
}
export default Category;