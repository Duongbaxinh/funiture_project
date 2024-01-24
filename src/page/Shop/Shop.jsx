import React, { useEffect, useState } from 'react';
import CardShop from '../../components/medium/CardShop/CardShop';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import './styles.scss';
import axios from 'axios';
import { Swiper, SwiperSlide } from 'swiper/react';
import CardProduct from '../../components/medium/CardProduct/CardProduct';
import Paginationpage from '../../components/medium/Pagination/Pagination';
import LoadingPage from '../LoadingPage'
import filterProduct from '../../util/FilterProduct';
import { GrFormPrevious } from "react-icons/gr";
import { MdNavigateNext } from "react-icons/md";
const products = [
    {
        "product_name": "Armchair Rendez-vous da L1J",
        "product_des": "Beautiful and comfortable cushion for Koala hanging chair. Available in Taupe Color",
        "product_price": 135.00,
        "product_thumbnail": "https://res.cloudinary.com/dwu92ycra/image/upload/v1705819712/Furniture_web/Modern-Bedroom-Furniture-Space-Saving-Wall-Mounted-Transformable-Folding-Bed-with-Sofa_yjy6xc.webp",
        "categoryId": "85a090ef-0c6e-420d-ab99-d7a1165a33f8",
        "product_state": "publish",
        "product_measure": "17 1/2x20 5/8 \"",
        "product_material": "Mental",
        "product_type": "chair",
        "product_image": [
            "https://res.cloudinary.com/dwu92ycra/image/upload/v1705331979/Furniture_web/KoalEggChair_2400x_v9cuks.webp",
            "https://res.cloudinary.com/dwu92ycra/image/upload/v1705332817/Furniture_web/Koala_egg_chair_preview_300x300_krlorz.avif",
            "https://res.cloudinary.com/dwu92ycra/image/upload/v1705332818/Furniture_web/950x950_33_300x300_blaym1.avif",
            "https://res.cloudinary.com/dwu92ycra/image/upload/v1705332826/Furniture_web/Egg2_300x300_egreqw.avif",
        ]
    },
    {
        "product_name": "Wesley Dining Chair",
        "product_des": `The Wesley Dining chair has a simple yet elegant look making it one of the designer furniture that we stock.
        Made from upholstered fabric mixed with timber legs with a smooth finish. 2 years manufacturers warranty and comes fully assembled.`,
        "product_price": 159.00,
        "product_thumbnail": "https://res.cloudinary.com/dwu92ycra/image/upload/v1705333020/Furniture_web/Copy_of_Untitled_Design_3_2400x_vubd1c.webp",
        "categoryId": "85a090ef-0c6e-420d-ab99-d7a1165a33f8",
        "product_state": "publish",
        "product_measure": "17 1/2x20 5/8 \"",
        "product_material": "Mental,Cotton,silk",
        "product_type": "chair",
        "product_image": [
            "https://res.cloudinary.com/dwu92ycra/image/upload/v1705333020/Furniture_web/Copy_of_Untitled_Design_3_2400x_vubd1c.webp",
            "https://res.cloudinary.com/dwu92ycra/image/upload/v1705333033/Furniture_web/Copy_of_Untitled_Design_4_2400x_r5cwww.webp",
            "https://res.cloudinary.com/dwu92ycra/image/upload/v1705333041/Furniture_web/Copy_of_Untitled_Design_5_2400x_mqg35f.webp",
            "https://res.cloudinary.com/dwu92ycra/image/upload/v1705333047/Furniture_web/Copy_of_Untitled_Design_6_2400x_tlhts8.webp",
        ]
    },
    {
        "product_name": "Eleanor Lounge Chair",
        "product_des": `Stylish combination of colour choices yet a mixture of materials, introducing the Felice dining chair. One of our newest dining chairs in our showroom. 
        Made from powder coated aluminium mixed with grey textaline mesh for the seating and backing, arms have recycled teak embedded into the framing to give you an extremely durable but yet stylish dining chair. Perfect to match up against any white aluminium dining tables or even other recycled teak tables.`,
        "product_price": 189.99,
        "product_thumbnail": "https://res.cloudinary.com/dwu92ycra/image/upload/v1705333552/Furniture_web/Untitled_design_-_2019-11-17T115901.351_2400x_e9yi6q.webp",
        "categoryId": "85a090ef-0c6e-420d-ab99-d7a1165a33f8",
        "product_state": "publish",
        "product_measure": "18x22 3/4\"",
        "product_material": "Polyester, Metal",
        "product_type": "chair",
        "product_image": [
            "https://res.cloudinary.com/dwu92ycra/image/upload/v1705333552/Furniture_web/Untitled_design_-_2019-11-17T115901.351_2400x_e9yi6q.webp",
            "https://res.cloudinary.com/dwu92ycra/image/upload/v1705333573/Furniture_web/IMG_6422_2400x_chhtxi.webp",
            "https://res.cloudinary.com/dwu92ycra/image/upload/v1705333580/Furniture_web/IMG_6424_2400x_xanrho.webp",
            "https://res.cloudinary.com/dwu92ycra/image/upload/v1705333596/Furniture_web/IMG_6425_2400x_hvpxag.webp"
        ]
    },
    {
        "product_name": "Sophia Dining Chair",
        "product_des": `A modern classic, the Winton Sling chair is a comfortable teak alternative that can be matched with any of our wide range teak tables. Combined with textilene mesh to give that extra bit of comfort for you to dine or just enjoy the great outdoors in style and comfort.`,
        "product_price": 179.99,
        "product_thumbnail": "https://res.cloudinary.com/dwu92ycra/image/upload/v1705333819/Winton_2400x_ubwfnk.webp",
        "categoryId": "85a090ef-0c6e-420d-ab99-d7a1165a33f8",
        "product_state": "publish",
        "product_measure": "19x21\"",
        "product_material": "Leatherette, Metal",
        "product_type": "chair",
        "product_image": [
            "https://res.cloudinary.com/dwu92ycra/image/upload/v1705333819/Winton_2400x_ubwfnk.webp",
            "https://res.cloudinary.com/dwu92ycra/image/upload/v1705333823/winton_sling_chair_lazarroblack_B__61853.1486598305_2400x_nuykq7.webp",
            "https://res.cloudinary.com/dwu92ycra/image/upload/v1705333828/winton_sling_chair_lazarroblack_C-etched__83520.1486598314_2400x_ciznhj.webp",
            "https://res.cloudinary.com/dwu92ycra/image/upload/v1705333830/winton_sling_chair_lazarroblack_D-etched__36242.1486598308_2400x_vunogf.webp"
        ]
    },
]
const rooms = [
    { title: 'Living Room', id: '82d68d3c-8952-4dea-baa7-85585f9d4e50', },
    { title: 'Bath Room', id: '198e9c9f-bd79-4054-aaa1-c7be51941de0', },
    { title: 'Bed Room', id: '8e3710a6-d9e9-4f0a-8096-09d8e8e478b2', },
    { title: 'Chicken Room', id: '16490c7b-1697-4789-9272-d5f3c9ed8125', },

]
const prices = [
    { title: '100 - 200$', type: 'small', },
    { title: '200 - 500$', type: 'medium', },
    { title: '500 - 800$', type: 'large', },
    { title: 'Trên 800$', type: 'expand', },

]
const categories = [
    { title: 'All', id: '1', type: 'all' },
    { title: 'Chairs & Benches', id: '2', type: 'chair' },
    { title: 'Tables', id: '3', type: 'table' },
    { title: 'Sofas', id: '4', type: 'sofa' },
    { title: 'Beds', id: '5', type: 'nove' },
    { title: 'Lamps', id: '8', type: 'nove' },

]
function Shop(props) {
    const [dataProduct, setDataProduct] = useState([])
    const [isSelected, setIsSelected] = useState({
        selected: 1,
        start: 0,
        end: 6
    })
    const [isLoading, setIsLoading] = useState(false)
    const [filterBy, setFilterBy] = useState({
        all: true,
        category: '',
        price: '',
        type: ''
    })
    const handleFilter = ({ key, value }) => {
        const filterClone = { ...filterBy }
        if (value === 'all') {
            filterClone.all = true;
            return setFilterBy({ ...filterClone })
        }
        filterClone[key] = value;
        filterClone.all = false;
        setIsSelected({ ...isSelected, selected: 1, start: 0, end: 6 })
        setFilterBy(() => ({ ...filterClone }))
    }
    const handlePagination = (value) => {
        const cloneIsSelected = { ...isSelected }
        cloneIsSelected.selected = value
        cloneIsSelected.start = cloneIsSelected.selected * 6
        cloneIsSelected.end = cloneIsSelected.start + 6
        setIsSelected(cloneIsSelected)
    }

    useEffect(() => {
        const fetchData = async () => {
            setIsLoading(true)
            const { data } = await axios.get(`http://localhost:8080/api/v1/product?limit=${30}`)
            setDataProduct(data.metadata)
            setIsLoading(false)
        }
        try {
            fetchData()
        } catch (error) {
            console.log(error)
            setIsLoading(false)
        } finally {
            setDataProduct([])
            setIsLoading(false)
        }
    }, [])
    const dataFilter = dataProduct ? filterProduct(dataProduct, filterBy) : []

    return (
        <div className='shop'>
            <div className="shop_banner">
                <Swiper
                    style={{ width: "100%", display: 'flex' }}
                    slidesPerView={1}
                    spaceBetween={10}
                    modules={[Navigation, Pagination, Scrollbar, A11y]}
                    navigation={{
                        prevEl: '.btn-prev',
                        nextEl: '.btn-next',
                    }}>
                    {products.map((product) => (
                        <SwiperSlide>
                            <CardShop banner_des={product.product_des}
                                banner_img={product.product_thumbnail}
                                banner_price={product.product_price}
                                banner_title={product.product_name} />
                        </SwiperSlide>
                    ))}
                </Swiper>
                <div className="shop_banner--button">
                    <button className='btn-prev btn'><GrFormPrevious size='30px' /></button>
                    <button className='btn-next btn' ><MdNavigateNext size='30px' /></button>
                </div>
            </div>
            <div className="shop_product">
                <div className="shop_sidebar">
                    <>
                        <h2>Category</h2>
                        <div className="shop_sidebar--cate">
                            {rooms.map((room) => (
                                <p value={room.id} key={room.type}
                                    onClick={() => handleFilter({ key: 'category', value: room.id })}
                                    style={{ backgroundColor: `${room.id === filterBy.category ? "grey" : ''}` }}
                                >{room.title}</p>
                            ))}
                        </div></>
                    <>
                        <h2>Price</h2>
                        <div className="shop_sidebar--cate">
                            {prices.map((price) => (
                                <p value={price.type} key={price.type}
                                    onClick={() => handleFilter({ key: 'price', value: price.type })}
                                    style={{ backgroundColor: `${price.type === filterBy.price ? "grey" : ''}` }}
                                >{price.title}</p>
                            ))}
                        </div></>
                    <>
                        <h2>Type</h2>
                        <div className="shop_sidebar--cate">
                            {categories.map((category) => (
                                <p key={category.type}
                                    onClick={() => handleFilter({ key: 'type', value: category.type })}
                                    style={{ backgroundColor: `${category.type === filterBy.type ? "grey" : ''}` }}
                                >{category.title}</p>
                            ))}
                        </div>
                    </>

                </div>
                <div className="shop_main">
                    {(isLoading || !dataFilter) ? <LoadingPage /> : (
                        <div className="shop_main--product">
                            {dataFilter.slice(isSelected.start, isSelected.end).map((product) => (
                                <CardProduct key={product.id} product={product} />
                            ))}
                        </div>
                    )}
                </div>
            </div>
            <div >
                {dataFilter && <Paginationpage isSelected={isSelected.selected}
                    items={Math.ceil(dataFilter.length / 6) - 1}
                    onNext={handlePagination}
                    onPreviod={handlePagination} />}
            </div>
        </div >
    );
}

export default Shop;