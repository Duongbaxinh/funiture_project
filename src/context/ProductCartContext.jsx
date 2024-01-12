import React, { useContext, createContext, useState } from 'react';

const CartContext = createContext();
export const ProductCartContext = ({ children }) => {
    const products = [
        {
            product_id: 1,
            product_name: '1.3 Chair',
            product_des: 'Brown',
            product_quanity: 1,
            product_price: 90000,
            product_thumbnai: 'https://res.cloudinary.com/dwu92ycra/image/upload/v1704167372/Furniture_web/Paste_image_ddv9ls.png'
        },
        {
            product_id: 2,
            product_name: '1.3 Chair',
            product_des: 'Grey',
            product_quanity: 2,
            product_price: 90000,
            product_thumbnai: 'https://res.cloudinary.com/dwu92ycra/image/upload/v1704169683/Furniture_web/Paste_image_an2jwm.png'
        },
        {
            product_id: 3,
            product_name: '1.3 Chair',
            product_des: 'Brown',
            product_quanity: 3,
            product_price: 90000,
            product_thumbnai: 'https://res.cloudinary.com/dwu92ycra/image/upload/v1704169741/Furniture_web/Paste_image_zmrrc2.png'
        },
    ]
    const [dataProduct, setDataProduct] = useState(products)
    const handleQuantity = (product_id, type) => {
        let newDataProduct;
        const indexOfProduct = dataProduct.findIndex((product) => product.product_id === product_id)

        if (type === 'down' && dataProduct[indexOfProduct].product_quanity > 0) {
            newDataProduct = dataProduct.toSpliced(indexOfProduct, 1, { ...dataProduct[indexOfProduct], product_quanity: (dataProduct[indexOfProduct].product_quanity - 1) })
            if (newDataProduct[indexOfProduct].product_quanity === 0) {
                return handleRemoveProduct(newDataProduct[indexOfProduct].product_id)
            }
            setDataProduct(newDataProduct)
        }
        else if (type === 'up') {
            newDataProduct = dataProduct.toSpliced(indexOfProduct, 1, { ...dataProduct[indexOfProduct], product_quanity: (dataProduct[indexOfProduct].product_quanity + 1) })
            setDataProduct(newDataProduct)

        }
    }
    const handleRemoveProduct = (product_id) => {
        let newDataProduct;
        const indexOfProduct = dataProduct.findIndex((product) => product.product_id === product_id)
        newDataProduct = dataProduct.toSpliced(indexOfProduct, 1)
        setDataProduct(newDataProduct)
    }
    return (
        <CartContext.Provider value={{ products, dataProduct, handleQuantity, handleRemoveProduct }}>
            {children}
        </CartContext.Provider>
    );
}
export const CartContextState = () => {
    return useContext(CartContext)
}
