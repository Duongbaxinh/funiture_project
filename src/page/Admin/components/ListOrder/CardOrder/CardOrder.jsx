import axios from 'axios';
import React, { useState } from 'react';
import { CiEdit } from 'react-icons/ci';
import { FaRegSave } from "react-icons/fa";
import { useToast } from '@chakra-ui/react'
import { MdDelete } from 'react-icons/md';
import { PageContextState } from '../../../../../context/PageContext';
import './styles.scss';
const states = [
    'pending', 'delivery', 'waiting', 'delivered', 'canceled', 'return'
]
function CardOrder({ isLoadingOrder, setIsLoadingOrder, order }) {
    const { userInfo } = PageContextState()
    const [isUpdate, setIsUpdate] = useState({
        update: false,
        isUpdating: false,
        stateValue: order.order_state
    })
    const toast = useToast()
    const handleSelectValue = (e) => {
        setIsUpdate({ ...isUpdate, stateValue: e.target.value })
    }
    const handleUpdateOrder = () => {
        setIsUpdate({ ...isUpdate, isUpdating: true })
        axios.put('http://localhost:8080/api/v1/order/updateState', {
            orderId: order.orderId,
            order_state: isUpdate.stateValue
        }, {
            headers: {
                'Authorization': userInfo.pairToken.accessToken
            }
        }).then((res) => {
            console.log(res)
            if (res.status === 200) {
                toast({
                    title: 'Update State Order',
                    description: 'Update successfull',
                    status: 'success',
                    duration: 3000,
                    isClosable: true,
                });
                setIsUpdate({ ...isUpdate, update: false, isUpdating: false })
                setIsLoadingOrder(!isLoadingOrder)

                return console.log('update sucessfull')
            } else {
                setIsUpdate({ ...isUpdate, update: false, isUpdating: false })

            }
        })
    }
    return (
        <div className='cardorderdata'>
            <p>{order.order_code}</p>
            <p>{order.product_name}</p>
            <img src={order.product_thumbnail} alt="" />
            {isUpdate.update ? (<select className='selecteditem' id="category"
                value={isUpdate.stateValue}
                onChange={handleSelectValue}
            >
                {states.map((item, index) => (
                    <option key={index} value={item}>{item}</option>
                ))}
            </select>) : <p>{order.order_state}</p>}
            <p>{order.order_quantity}</p>
            <p>{order.order_total_price}</p>
            <div className='productCard_action'>
                {!isUpdate.update ? <button onClick={() => setIsUpdate({ ...isUpdate, update: true })}><CiEdit /></button>
                    : <button onClick={handleUpdateOrder}><FaRegSave />       </button>}
                <button ><MdDelete /></button></div>
        </div>
    );
}

export default CardOrder;