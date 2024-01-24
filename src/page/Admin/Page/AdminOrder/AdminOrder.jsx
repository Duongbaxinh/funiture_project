import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { PageContextState } from '../../../../context/PageContext';
import ListOrder from '../../components/ListOrder/ListOrder';
import Sidebar from '../../components/Sidebar/Sidebar';

function AdminOrder(props) {
    const [orders, setOrders] = useState([])
    const { userInfo } = PageContextState()
    const [isLoadingOrder, setIsLoadingOrder] = useState(false)
    const [isLoading, setIsLoading] = useState(false)

    useEffect(() => {
        const fetchProduct = async () => {
            const { data } = await axios.get(`http://localhost:8080/api/v1/order/all`, {
                headers: {
                    'Authorization': userInfo.pairToken.accessToken
                }
            })
            setOrders(data.metadata)
        }
        try {
            if (userInfo) {
                setIsLoading(true)
                fetchProduct()
            }
        } catch (error) {
            console.log(error)
            setIsLoading(false)
        } finally {
            setIsLoading(false)
        }
    }, [userInfo, isLoadingOrder])
    return (
        <div className='admin'>
            <Sidebar />
            <div className="context">
                <ListOrder
                    isLoadingOrder={isLoadingOrder}
                    setIsLoadingOrder={setIsLoadingOrder}
                    listOrderData={orders} />
            </div>
        </div>
    );
}

export default AdminOrder;