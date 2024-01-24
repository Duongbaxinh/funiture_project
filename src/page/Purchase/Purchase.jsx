import React, { useEffect, useState } from 'react';
import axios from 'axios'
import CardPurchase from '../../components/medium/CardPurchase/CardPurchase';
import './styles.scss'
import { PageContextState } from '../../context/PageContext';
import SideBar from '../../components/SideBar/SideBar';


const states = [
    {
        title: 'Tất cả',
        type: 'all'
    },
    {
        title: 'Chờ thanh toán',
        type: 'pending'
    },
    {
        title: 'Vận chuyển',
        type: 'delivery'
    },
    {
        title: 'Chờ giao hàng',
        type: 'waiting'
    },
    {
        title: 'Hoàn thành',
        type: 'delivered'
    },
    {
        title: 'Đã hủy',
        type: 'canceled'
    },
    {
        title: 'Trả hàng',
        type: 'return'
    },
]
function Purchase(props) {
    const [orderData, setOrderData] = useState([])
    const { userInfo } = PageContextState()
    const [stateOrder, setStateOrder] = useState('all')
    const handleStateOrder = (value) => {
        setStateOrder(value)
    }
    useEffect(() => {
        const fetchData = async () => {
            if (userInfo) {
                const { data } = await axios.get('http://localhost:8080/api/v1/order', {
                    headers: {
                        'Authorization': userInfo.pairToken.accessToken
                    }
                })
                setOrderData(data.metadata)
            } else {
                alert('df')
            }
        }
        try {
            fetchData()
        } catch (error) {
            console.log(error)
        } finally {
            console.log('finally')
        }
    }, [userInfo])
    if (!orderData) return <h1>Loading...</h1>
    const orderFilter = orderData.filter((order) => order.order_state === stateOrder || stateOrder === 'all')

    return (
        <div className='purchase'>
            {/* SIDEBAR */}
            <SideBar />
            {/* ORDER */}
            <div className="purchase_order">
                <ul className="purchase_order--state">
                    {states.map((state, index) => (
                        <li key={state.type}
                            style={{ borderBottom: `${state.type === stateOrder ? '3px solid red' : ''}` }}
                            onClick={() => handleStateOrder(state.type)}
                        >
                            {state.title}
                        </li>
                    ))}
                </ul>
                {(orderFilter.length <= 0) ? <>
                    <div className="purchase_order--not">
                        <div className="purchase_order--img">
                            <img src="https://res.cloudinary.com/dwu92ycra/image/upload/v1705946900/Furniture_web/5fafbb923393b712b964_ep9w5a.png" alt="" />
                        </div>
                        <p>Chưa có đơn hàng nào</p>
                    </div></> :
                    (<>
                        <div className="purchase_order--product">
                            {orderFilter.map((order, index) => (
                                <CardPurchase key={index}
                                    product_id={order.product_id}
                                    product_name={order.product_name}
                                    order_state={order.order_state}
                                    order_quantity={order.order_quantity}
                                    product_des={order.product_des}
                                    product_thumbnail={order.product_thumbnail}
                                    order_total_price={order.order_total_price} />
                            ))}
                        </div></>)
                }
            </div>

        </div>
    );
}

export default Purchase;