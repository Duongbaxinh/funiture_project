import React from 'react';
import '../styles.scss'
import { CiEdit } from "react-icons/ci";
import { MdDelete } from "react-icons/md";
import { Link } from 'react-router-dom';
import axios from 'axios';
function CardPorduct({ product_id, product_name, product_price, prouduct_image }) {
    const handleDeleteProduct = async (product_id) => {
        try {
            const result = window.confirm('Bạn chắc muốn xóa sản phẩm này')
            if (result) {
                console.log('runn here1')
                const { data } = await axios.delete(`http://localhost:8080/api/v1/product/${product_id}`)
                console.log('check data', data.metadata)
            } else {
                console.log('run here 2')
            }

        } catch (error) {
            console.log(error)
        }
    }
    return (
        <div className='productCard'>
            <p>{product_name}</p>
            <img src={prouduct_image} alt="" />
            <p>{product_price} $</p>
            <div className='productCard_action'>
                <Link to={`/editproduct/${product_id}`}><button><CiEdit /></button>
                </Link>
                <button onClick={() => handleDeleteProduct(product_id)}><MdDelete /></button></div>
        </div>
    );
}

export default CardPorduct