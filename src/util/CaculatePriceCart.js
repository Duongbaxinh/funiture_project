const caculatePriceCart = (products) => {
    return products.reduce((arr, product) => {
        return arr += (product.product_price * product.product_quanity)
    }, 0)
}

module.exports = {
    caculatePriceCart
}