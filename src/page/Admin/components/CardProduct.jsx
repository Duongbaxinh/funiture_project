import React from 'react';
import '../styles.scss'
import { CiEdit } from "react-icons/ci";
import { MdDelete } from "react-icons/md";
import { Link } from 'react-router-dom';
import axios from 'axios';
import { useToast } from '@chakra-ui/react';
function CardPorduct({ product_id, product_name, product_price, prouduct_image }) {
    const toast = useToast()
    const handleDeleteProduct = async (product_id) => {
        try {
            const result = window.confirm('Bạn chắc muốn xóa sản phẩm này')
            if (result) {
                const deleteProduct = await axios.delete(`http://localhost:8080/api/v1/product/${product_id}`)
                if (deleteProduct.status === 200) {
                    toast({
                        title: 'Delete Product',
                        description: 'Delete successfull',
                        status: 'success',
                        duration: 3000,
                        isClosable: true,
                    });
                }
            }
        } catch (error) {
            toast({
                title: 'Error',
                description: 'error',
                status: 'error',
                duration: 3000,
                isClosable: true,
            });
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