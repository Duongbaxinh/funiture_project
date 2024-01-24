import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import imagePlaceholder from '../../assets/image/imagePlaceholder.png';
import Myy_Image from '../../assets/images/Header.jpg';
import { ReactComponent as IconArrowL } from '../../assets/svg/icon_arrowL.svg';
import { ReactComponent as IconMail } from '../../assets/svg/icon_mail.svg';
import { ReactComponent as IconStartA } from '../../assets/svg/icon_startA.svg';
import "./style.scss";
import axios from 'axios';
import LoadingPage from '../LoadingPage';
import Paginationpage from '../../components/medium/Pagination/Pagination';
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
    { title: 'Tables', id: '3', type: 'table' },
    { title: 'Sofas', id: '4', type: 'sofa' },
    { title: 'Beds', id: '5', type: 'nove' },
    { title: 'Starage & Shelves', id: '6', type: 'nove' },
    { title: 'Office', id: '7', type: 'nove' },
    { title: 'Lamps', id: '8', type: 'nove' },

]

function Category(props) {

    // khỏi tạo biến state currentCategory để lấy dữ liệu theo kiểu của sản phẩm
    const [currentCategory, setCurrentCategory] = useState('chair')
    // khởi tạo biến state productCategory để lưu sản phẩm lấy từ api
    const [productCategory, setProductCategory] = useState([])
    // Khởi tạo biến state loading để kiểm soát quá trình lấy dữ liệu từ api
    const [isLoading, setisLoading] = useState(false)
    const [isSelected, setIsSelected] = useState({
        selected: 1,
        start: 0,
        end: 6
    })
    // hàm xử lý việc chọn trang hiển thị sản phẩm
    const handlePagination = (value) => {
        // tạo một bản sao của biến isSelected
        const cloneIsSelected = { ...isSelected }
        // cập nhật lại selected: mặc định là một khi nhấn vào trang nào thì sẽ đổi thành số trang đó
        cloneIsSelected.selected = value
        // cập nhật lại vị trí bắt đầu lấy trong mảng ví dụ lấy từ sản phẩm số 1 - 6 (mặc định là một trang tối đa 6 sản phẩm)
        cloneIsSelected.start = cloneIsSelected.selected * 6
        // cập nhật lại vị trí kết thúc lấy trong mảng ví dụ lấy từ sản phẩm số 1 - 6 (mặc định là một trang tối đa 6 sản phẩm)
        cloneIsSelected.end = cloneIsSelected.start + 6
        // set biến isSelected lại
        /** nó sẽ trả lại như này { selected:value, start: value *6 , end: value + 6} */
        setIsSelected(cloneIsSelected)
    }
    // hàm set currentCategory 
    const handleCategory = (value) => {
        // thay đổi biến currentCategory 
        setCurrentCategory(value)
    }
    // hàm gọi api để lấy dữ liệu từ server
    useEffect(() => {
        setisLoading(true)
        // tạo một hàm để gọi api
        const fetchProduct = async () => {
            // call api với thư viện axios
            const data = await axios.get(`http://localhost:8080/api/v1/product/${currentCategory}`)
            // dùng hàm setProductCategory để set lại biến productCategory từ mảng [] sang mảng chứa các sản phẩm lấy từ api
            setProductCategory(data.data.metadata)
        }
        // hàm này dùng để gọi hàm fetchProduct sau 1,5s 
        setTimeout(() => {
            // gọi hàm
            fetchProduct()
            // sau khi set data thành công thì set biến loading lại bằng false
            setisLoading(false)
        }, 1500)

        // biến curentCategory ở trong ngoặc vuông là cứ mỗi khi biến curentCategory thay đổi là nó sẽ gọi lại api
    }, [currentCategory])

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
                        ><p className={`${item.type === currentCategory ? 'selectedItem' : ''}`}>{item.title}</p>
                        </div>
                    ))}
                </div>
                {/* nếu is loadding ===  true (khi gọi dữ liệu) thì sẽ hiển thị ra page loading == false (lấy dữ liệu) thì hiển thị ra danh sách sản phẩm   */}
                {isLoading ?
                    <LoadingPage /> :
                    (
                        <div className='container_category'>
                            <div className='grid_container'>
                                {/* .slice trả về một mảng con từ vị trí index start đến vị trí index end mặc định trang đầu tiên là từ 0 - 6 */}
                                {productCategory.slice(isSelected.start, isSelected.end).map((product, index) => (
                                    <div className={`item${index} content`}>
                                        <div className={`item${index}`}>
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
                                            <Link to={`/product/${product.id}`}>
                                                <button>View Detail</button>
                                            </Link>
                                        </div>
                                    </div>
                                ))}
                            </div>
                            {/* Phân trang */}
                            <div >
                                {/* nếu có sản phẩm thì sẽ render ra trang này
                                    <Paginationpage/> là một component
                                    truyền vào các tham số isSlected: là cái trang đang được chọn
                                                            items: số lượng trang
                                                            onNext: hàm chuyển sang trang khác 
                                                            onPreviod :............ về trang trước
                                  */}
                                {productCategory && <Paginationpage isSelected={isSelected.selected}
                                    items={Math.ceil(productCategory.length / 6) - 1}
                                    onNext={handlePagination}
                                    onPreviod={handlePagination} />}
                            </div>
                        </div>
                    )}

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