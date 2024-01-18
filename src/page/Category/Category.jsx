import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Myy_Image from '../../assets/images/Header.jpg';
import Footer from '../../assets/images/Newsletter.png';
import { ReactComponent as IconMail } from '../../assets/svg/icon_mail.svg';
import imagePlaceholder from '../../assets/image/imagePlaceholder.png';
import { ReactComponent as IconArrowL } from '../../assets/svg/icon_arrowL.svg';
import { ReactComponent as IconStartA } from '../../assets/svg/icon_startA.svg';
import "./style.scss";

import axios from 'axios';
const newslettter =
{
    id: 1,
    title: 'Join Our Newsletter',
    details: 'Sign up for deals, new products and promotions',
    background: imagePlaceholder
}
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
                        <div key={index}
                            onClick={() => handleCategory(item.type)}
                        ><p className={`${item.type === currentCategory ? 'selected' : ''}`}>{item.title}</p>
                        </div>
                    ))}
                </div>
                <div className='grid_container'>
                    {productCategory.map((product, index) => (
                        <div className={`item${index} content`}>
                            <div className={`item${index}`}>
                                <div className="images">
                                    <img src={product.product_thumbnail} alt='' style={{ width: '100%', height: '100%' }} />
                                </div>
                                <div className='Details'>
                                    <IconStartA />
                                    <IconStartA />
                                    <IconStartA />
                                    <IconStartA />
                                    <IconStartA />
                                    <h2>{product.product_name}</h2>
                                    <h4>${product.product_price}</h4>
                                </div>

                            </div>
                            <div className="item_over">
                                <Link to={`/product/${product.id}`}>
                                    <button>View Detail</button>
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>

            </div>
            <div className="newsletter">
                <img src={newslettter.background} alt="" />
                <div className='newsleter_content'>
                    <h1>{newslettter.title}</h1>
                    <p>{newslettter.details}</p>
                    <div className="input_form">
                        <IconMail /><input type="text" placeholder='Email address' />
                        <button>Sign Up</button>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Category;