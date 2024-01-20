import axios from 'axios';
import React, { createContext, useContext, useEffect, useState } from 'react';
const CartContext = createContext();
export const ProductCartContext = ({ children }) => {
    const [accessToken, setAccessToken] = useState('')
    const [dataProduct, setDataProduct] = useState([])
    const [isLoadCart, setIsLoadCart] = useState(false)
    const [ordered, setOrdered] = useState(null)
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
                    'Authorization': accessToken
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
                    'Authorization': accessToken
                }
            })
            setIsLoadCart(!isLoadCart)
            console.log('check Action cart', addAction)
        } catch (error) {
            console.log('check error', error)
        }
    }
    const handleSetOrder = (order) => {
        setIsLoadCart(!isLoadCart)
        setOrdered(order)
    }

    useEffect(() => {
        const fetchData = async () => {
            const userInfo = JSON.parse(localStorage.getItem('userInfo'))
            if (userInfo) {
                setAccessToken(userInfo.pairToken.accessToken)
                const dataProductCart = await axios.get('http://localhost:8080/api/v1/cart', {
                    headers: {
                        'Authorization': userInfo.pairToken.accessToken
                    }
                })
                setDataProduct(dataProductCart.data.metadata)
                console.log('check data product in cart', dataProductCart.data.metadata)
            }
        }
        try {
            fetchData()
        } catch (error) {
            console.log('error occur :::::: ', error.message)
        }
    }, [isLoadCart])
    return (
        <CartContext.Provider value={{
            dataProduct,
            ordered,

            handleQuantity,
            handleRemoveProduct,
            handleAddProductToCart,
            handleSetOrder,
        }}>
            {children}
        </CartContext.Provider>
    );
}
export const CartContextState = () => {
    return useContext(CartContext)
}
