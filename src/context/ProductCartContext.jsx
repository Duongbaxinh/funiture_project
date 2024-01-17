import React, { useContext, createContext, useState, useEffect } from 'react';
import axios from 'axios'
const CartContext = createContext();
const fakeToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjMzYjlkODVkLWZhZGUtNDFmZC05N2NkLWE5YTU0ZGJiMzhlZCIsImVtYWlsIjoieGluaEBnbWFpbC5jb20iLCJpYXQiOjE3MDU0MTM3ODIsImV4cCI6MTcwNTU4NjU4Mn0.eogeJl35nT7hdAGWJotvx8we8Gyuxhr4pSLEb5DAYIM'
export const ProductCartContext = ({ children }) => {

    const [dataProduct, setDataProduct] = useState(null)
    const [isLoadCart, setIsLoadCart] = useState(false)
    const handleQuantity = async (productId, type) => {

        const indexOfProduct = dataProduct.findIndex((product) => product.productId === productId)

        if (type === 'down' && dataProduct[indexOfProduct].quantity > 0) {
            // newDataProduct = dataProduct.toSpliced(indexOfProduct, 1, { ...dataProduct[indexOfProduct], quantity: (dataProduct[indexOfProduct].quantity - 1) })
            // if (newDataProduct[indexOfProduct].quantity === 0) {
            //     return handleRemoveProduct(newDataProduct[indexOfProduct].productId)
            // }
            // setDataProduct(newDataProduct)
            await handleReduceProductToCart(productId)
        }
        else if (type === 'up') {
            await handleAddProductToCart(productId)
        }
    }
    const handleRemoveProduct = (productId) => {
        let newDataProduct;
        const indexOfProduct = dataProduct.findIndex((product) => product.productId === productId)
        newDataProduct = dataProduct.toSpliced(indexOfProduct, 1)
        setDataProduct(newDataProduct)
    }
    const handleAddProductToCart = async (productId) => {
        try {
            const addAction = await axios.post('http://localhost:8080/api/v1/cart', {
                cart_productId: productId
            }, {
                headers: {
                    'Authorization': fakeToken
                }
            })
            setIsLoadCart(!isLoadCart)
            console.log('check Action cart', addAction)
        } catch (error) {
            console.log('check error', error)
        }
    }
    const handleReduceProductToCart = async (productId) => {
        try {
            const addAction = await axios.put('http://localhost:8080/api/v1/cart', {
                productId: productId
            }, {
                headers: {
                    'Authorization': fakeToken
                }
            })
            setIsLoadCart(!isLoadCart)
            console.log('check Action cart', addAction)
        } catch (error) {
            console.log('check error', error)
        }
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
    }, [isLoadCart])
    return (
        <CartContext.Provider value={{ dataProduct, handleQuantity, handleRemoveProduct, handleAddProductToCart }}>
            {children}
        </CartContext.Provider>
    );
}
export const CartContextState = () => {
    return useContext(CartContext)
}
