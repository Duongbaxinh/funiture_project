import { useToast } from '@chakra-ui/react';
import axios from 'axios';
import React, { createContext, useContext, useEffect, useState } from 'react';
const CartContext = createContext();
export const ProductCartContext = ({ children }) => {
    const toast = useToast()
    const [accessToken, setAccessToken] = useState('')
    const [dataProduct, setDataProduct] = useState([])
    const [isLoadCart, setIsLoadCart] = useState(false)
    const [ordered, setOrdered] = useState(null)
    const handleQuantity = async (productId, type) => {
        const indexOfProduct = dataProduct.findIndex((product) => product.productId === productId)
        if (type === 'down' && dataProduct[indexOfProduct].quantity > 0) {
            await handleReduceProductToCart(productId)
        }
        else if (type === 'up') {
            await handleAddProductToCart(productId)
        }
    }
    const handleRemoveProduct = async (productId, cartId) => {
        const result = window.confirm('Bạn chắc muốn xóa sản phẩm này ra khỏi giỏ hàng?')
        try {
            if (result) {
                const removeProductInCard = await axios.post('http://localhost:8080/api/v1/cart/delete', {
                    cartId,
                    productId
                })
                if (removeProductInCard.status === 200) {
                    toast({
                        title: 'Delete successfully',
                        description: 'delete successfull',
                        status: 'success',
                        duration: 3000,
                        isClosable: true,
                    });
                    setIsLoadCart(!isLoadCart)
                }
            }
        } catch (error) {
            toast({
                title: 'Error',
                description: 'Delete failure',
                status: 'error',
                duration: 3000,
                isClosable: true,
            });
        }
    }
    const handleAddProductToCart = async (productId) => {
        try {
            await axios.post('http://localhost:8080/api/v1/cart', {
                cart_productId: productId
            }, {
                headers: {
                    'Authorization': accessToken
                }
            })
            toast({
                title: 'Sản phẩm đã được thêm vào giỏ hàng',
                description: 'add successfull',
                status: 'success',
                duration: 3000,
                isClosable: true,
            });
            setIsLoadCart(!isLoadCart)
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
            }
        }
        try {
            fetchData()
        } catch (error) {
            toast({
                title: 'Error',
                description: error.message,
                status: 'error',
                duration: 3000,
                isClosable: true,
            });
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
