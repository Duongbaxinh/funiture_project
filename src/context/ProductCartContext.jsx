import React, { useContext, createContext, useState, useEffect } from 'react';
import axios from 'axios'
const CartContext = createContext();
const fakeToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjRkMDlmNmUwLWQwZGEtNDZjZC05OWM5LWE5OWM5MDIxZTY2NCIsImVtYWlsIjoieGluaEBnbWFpbC5jb20iLCJpYXQiOjE3MDUyMDQyOTUsImV4cCI6MTcwNTM3NzA5NX0.KLwwI5NFL0BiyLHbeiANJf-PJTDYxmcFQd3WQbzceXI'
export const ProductCartContext = ({ children }) => {
    // const products = [
    //     {
    //         productId: 1,
    //         product_name: '1.3 Chair',
    //         product_des: 'Brown',
    //         quantity: 1,
    //         product_price: 90000,
    //         product_thumbnai: 'https://res.cloudinary.com/dwu92ycra/image/upload/v1704167372/Furniture_web/Paste_image_ddv9ls.png'
    //     },
    //     {
    //         productId: 2,
    //         product_name: '1.3 Chair',
    //         product_des: 'Grey',
    //         quantity: 2,
    //         product_price: 90000,
    //         product_thumbnai: 'https://res.cloudinary.com/dwu92ycra/image/upload/v1704169683/Furniture_web/Paste_image_an2jwm.png'
    //     },
    //     {
    //         productId: 3,
    //         product_name: '1.3 Chair',
    //         product_des: 'Brown',
    //         quantity: 3,
    //         product_price: 90000,
    //         product_thumbnai: 'https://res.cloudinary.com/dwu92ycra/image/upload/v1704169741/Furniture_web/Paste_image_zmrrc2.png'
    //     },
    // ]
    const [dataProduct, setDataProduct] = useState(null)
    const handleQuantity = (productId, type) => {
        let newDataProduct;
        const indexOfProduct = dataProduct.findIndex((product) => product.productId === productId)

        if (type === 'down' && dataProduct[indexOfProduct].quantity > 0) {
            newDataProduct = dataProduct.toSpliced(indexOfProduct, 1, { ...dataProduct[indexOfProduct], quantity: (dataProduct[indexOfProduct].quantity - 1) })
            if (newDataProduct[indexOfProduct].quantity === 0) {
                return handleRemoveProduct(newDataProduct[indexOfProduct].productId)
            }
            setDataProduct(newDataProduct)
        }
        else if (type === 'up') {
            newDataProduct = dataProduct.toSpliced(indexOfProduct, 1,
                {
                    ...dataProduct[indexOfProduct],
                    quantity: (dataProduct[indexOfProduct].quantity + 1)
                })
            setDataProduct(newDataProduct)
        }
    }
    const handleRemoveProduct = (productId) => {
        let newDataProduct;
        const indexOfProduct = dataProduct.findIndex((product) => product.productId === productId)
        newDataProduct = dataProduct.toSpliced(indexOfProduct, 1)
        setDataProduct(newDataProduct)
    }
    useEffect(() => {
        const fetchData = async () => {
            const dataProductCart = await axios.get('http://localhost:8080/api/v1/cart', {
                headers: {
                    'Authorization': fakeToken
                }
            })
            setDataProduct(dataProductCart.data.metadata)
            console.log('check data product in cart', dataProductCart.data.metadata)
        }
        try {
            fetchData()
        } catch (error) {
            console.log('error occur :::::: ', error.message)
        }
    }, [])
    return (
        <CartContext.Provider value={{ dataProduct, handleQuantity, handleRemoveProduct }}>
            {children}
        </CartContext.Provider>
    );
}
export const CartContextState = () => {
    return useContext(CartContext)
}
