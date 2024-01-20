import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom'
import './styles.scss'
import { ReactComponent as SvgIconArrowRS } from '../../assets/svg/icon_arrowRS.svg';
import { ReactComponent as SvgIconStar } from '../../assets/svg/icon_startA.svg';
import LinkHeader from '../../components/smaler/LinkHeader/LinkHeader';
import { SwiperSlide, Swiper } from 'swiper/react'
import { useToast } from '@chakra-ui/react'
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import QuantityButton from '../../components/medium/QuantityButton/QuantityButton';
import { rate } from '../../util/CaculateReview';
import CardReview from '../../components/smaler/CardReview/CardReview';
import axios from 'axios';
import { CartContextState } from '../../context/ProductCartContext';
const product = {
    id: '1',
    product_name: 'ZENSO LOUNGE',
    product_des: `ZENSO LOUNGE stands apart through its level of comfort which it provides despite its compact size. It is inviting and expressive. The sturdy solid wood frame appears light thanks to its cross construction. The tapered contour of the upholstery shapes its character. ZENSO LOUNGE always has an upholstered seat and back. The seat upholstery is always fully upholstered; the back shell has an attached cushion. You can sit back, relax and feel embraced.`,
    product_price: 19900,
    product_thumbnail: 'https://res.cloudinary.com/dwu92ycra/image/upload/v1705241385/Furniture_web/Image_Placeholder_anbrh1.png',
    product_measure: '17 1/2x20 5/8 "',
    product_color: ['Brown', 'Black'],
    category: 'Living room',
    images: [
        'https://res.cloudinary.com/dwu92ycra/image/upload/v1705241481/Furniture_web/Image_Placeholder_j0hjni.png',
        'https://res.cloudinary.com/dwu92ycra/image/upload/v1705241619/Furniture_web/Image_Placeholder_kck8mz.png',
        'https://res.cloudinary.com/dwu92ycra/image/upload/v1705241937/Furniture_web/Image_Placeholder_stli0l.png',
        'https://res.cloudinary.com/dwu92ycra/image/upload/v1704167372/Furniture_web/Paste_image_ddv9ls.png'
    ]

}
// const reviews = [
//     {
//         review_id: '1',
//         review_user: {
//             name: 'Uyen Do Thi',
//             avatar: 'https://res.cloudinary.com/dwu92ycra/image/upload/v1705251575/Furniture_web/Uyen_umotml.png'
//         },
//         review_evaluate: 5,
//         review_content: 'I bought it 3 weeks ago and now come back just to say “Awesome Product”. I really enjoy it. The product meets all my requirements and I recommend it for purchase.',
//         createAt: Date.now()
//     },
//     {
//         review_id: '2',
//         review_user: {
//             name: 'Xinh Duong Ba',
//             avatar: 'https://res.cloudinary.com/dwu92ycra/image/upload/v1705251575/Furniture_web/Xinh_nhuth2.png'
//         },
//         review_evaluate: 5,
//         review_content: 'I bought it 3 weeks ago and now come back just to say “Awesome Product”. I really enjoy it. The product meets all my requirements and I recommend it for purchase.',
//         createAt: Date.now()
//     },
//     {
//         review_id: '3',
//         review_user: {
//             name: 'Thuy Tran Thi',
//             avatar: 'https://res.cloudinary.com/dwu92ycra/image/upload/v1705251575/Furniture_web/Thuy_jzhu4z.png'
//         },
//         review_evaluate: 5,
//         review_content: 'I bought it 3 weeks ago and now come back just to say “Awesome Product”. I really enjoy it. The product meets all my requirements and I recommend it for purchase.',
//         createAt: Date.now()
//     },
//     {
//         review_id: '4',
//         review_user: {
//             name: 'Huy Tran Quang',
//             avatar: 'https://res.cloudinary.com/dwu92ycra/image/upload/v1705251582/Furniture_web/Huy_usud6j.jpg'
//         },
//         review_evaluate: 5,
//         review_content: 'I bought it 3 weeks ago and now come back just to say “Awesome Product”. I really enjoy it. The product meets all my requirements and I recommend it for purchase.',
//         createAt: Date.now()
//     },
//     {
//         review_id: '5',
//         review_user: {
//             name: 'Phuc Nguyen Quang',
//             avatar: 'https://res.cloudinary.com/dwu92ycra/image/upload/v1705251575/Furniture_web/Phuc_jt0a7x.png'
//         },
//         review_evaluate: 5,
//         review_content: 'I bought it 3 weeks ago and now come back just to say “Awesome Product”. I really enjoy it. The product meets all my requirements and I recommend it for purchase.',
//         createAt: Date.now()
//     }
// ]

function Product(props) {
    const { handleAddProductToCart } = CartContextState()
    const [dataProduct, setDataProduct] = useState(null)
    const { productId } = useParams()
    const [imageShow, setImageShow] = useState(null)
    const handleAddToCard = async () => {
        await handleAddProductToCart(productId)

    }
    useEffect(() => {
        const fetchData = async () => {
            const { data } = await axios.get(`http://localhost:8080/api/v1/product/detail/${productId}`)
            console.log('check detail product', data.metadata)
            data.metadata['quantity'] = 1;
            setImageShow(data.metadata.product_thumbnail)
            setDataProduct(data.metadata)
        }
        fetchData()

    }, [productId])
    const handleUp = () => {
        setDataProduct(() => ({ ...dataProduct, quantity: dataProduct.quantity + 1 }))
    }
    const handleDown = () => {
        if (dataProduct.quantity > 1) {
            setDataProduct(() => ({ ...dataProduct, quantity: dataProduct.quantity - 1 }))
        }
    }
    if (!dataProduct) return <h1>Loading...</h1>
    return (
        <div className='product'>
            <div style={{ paddingBottom: '10px' }}>
                <LinkHeader titlePage={'Product'} />
            </div>
            <div className="product_detail" >
                {/* IMAGE PRODUCT */}
                <div className="product_detail-image" >
                    <div className="product_detail-mainImage">
                        <img src={imageShow} alt='' />
                        <div className="product_detail-mainImage--btn">
                            <button >NEW</button>
                            <button >50%</button>
                        </div>

                    </div>
                    <div className="product_detail-listImage" >
                        <Swiper
                            style={{ width: "100%", display: 'flex' }}
                            slidesPerView={3}
                            spaceBetween={10}
                            navigation={{
                                prevEl: `.btn-prev}`,
                                nextEl: `.btn-next}`,
                            }}>
                            {dataProduct.images.map((img) => (
                                <SwiperSlide >
                                    <div className='itemImage'
                                        onClick={() => setImageShow(img)}
                                        style={{ aspectRatio: 217 / 217 }}
                                    >
                                        <img src={img} alt="" style={{ width: '100%', height: '100%' }} />
                                    </div>
                                </SwiperSlide>
                            ))}

                        </Swiper>
                    </div>
                </div>
                {/* DESCRIPTION PRODUCT */}
                <div className="product_detail-info">
                    <h1>{dataProduct.product_name}</h1>
                    <p>{dataProduct.product_des}</p>
                    <h2>${dataProduct.product_price}</h2>
                    <hr style={{ width: '100%' }} />
                    <div>
                        <h3 style={{ fontWeight: '700' }}>Measurement</h3>
                        <p>{dataProduct.product_measure}</p>
                    </div>
                    <div style={{ display: 'flex', placeContent: 'center', placeItems: 'center' }}>
                        <p>Choose color </p>
                        <i><SvgIconArrowRS /></i>
                    </div>
                    <div className="product_detail-info--choose">
                        {dataProduct.images.map((img, index) => (
                            <div style={{ width: '72px', height: '72px' }}
                                onClick={() => setImageShow(img)}>
                                <img src={img} alt='' />
                            </div>
                        ))}
                    </div>
                    <div className="product_detail-info--action">
                        <div className='product_detail-info--quantity' >
                            <div style={{ width: '150px' }}>
                                <QuantityButton onDown={handleDown}
                                    quantity={dataProduct.quantity}
                                    onUp={handleUp} />
                            </div>
                            <button>
                                Wish List
                            </button>
                        </div>
                        <button className='product_detail-info--add'
                            onClick={handleAddToCard}
                        >
                            Add to cart
                        </button>
                        <hr />
                        <div className="product_detail-info--category">
                            <p>Category</p>
                            <p>{product.category}</p>
                        </div>
                    </div>
                </div>

            </div>
            <div className="product_review">
                <h1>Customer Reviews</h1>
                {/* START */}
                <div className="product_review-star">
                    <div style={{ display: 'flex', gap: '5px' }}>
                        <i><SvgIconStar /></i>
                        <i><SvgIconStar /></i>
                        <i><SvgIconStar /></i>
                        <i><SvgIconStar /></i>
                        <i><SvgIconStar /></i>
                    </div>
                    <p>{dataProduct.reviews.length} reviews</p>
                </div>
                {/* INPUT */}
                <div className="product_review-input">
                    <input placeholder='Write your review' />
                </div>
                {/* TITLE LABLE */}
                <div className="product_review-titlelable">
                    <h1>{dataProduct.reviews.length} reviews</h1>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
                        {dataProduct.reviews.map((review) => (
                            <CardReview
                                content={review.comment_content}
                                avatar={review.avatar}
                                name={review.name}
                                rate={review.comment_rate}
                                createAt={review.createAt}
                            />
                        ))}
                    </div>
                </div>
            </div>

        </div >
    );
}

export default Product;