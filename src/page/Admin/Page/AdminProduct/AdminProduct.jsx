import React, { useEffect, useState } from 'react';
import Sidebar from '../../components/Sidebar/Sidebar';
import ListProduct from '../../components/ListProduct/ListProduct';
import axios from 'axios';

function AdminProduct(props) {
    const [products, setProducts] = useState([])
    const [isLoading, setIsLoading] = useState(false)

    useEffect(() => {
        const fetchProduct = async () => {
            const { data } = await axios.get(`http://localhost:8080/api/v1/product?limit=${50} `)
            setProducts(data.metadata)
        }
        try {
            setIsLoading(true)
            fetchProduct()
        } catch (error) {
            console.log(error)
            setIsLoading(false)
        } finally {
            setIsLoading(false)
        }
    }, [])
    return (
        <div className='admin'>
            <Sidebar />
            <div className="context">
                <ListProduct products={products} />
            </div>
        </div>
    );
}

export default AdminProduct;