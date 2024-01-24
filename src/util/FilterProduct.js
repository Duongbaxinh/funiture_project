const handlerPrice = {
    small: (x) => x >= 100 && x < 200,
    medium: (x) => x >= 200 && x < 500,
    large: (x) => x >= 500 && x < 800,
    expand: (x) => x >= 800
}
const filterProduct = (dataProduct = [], filterBy) => {
    return dataProduct.filter((product) => {
        if (filterBy.all
            || (filterBy.category === ''
                && filterBy.price === ''
                && filterBy.type === '')) {
            return product
        }
        if (filterBy.price !== '') {
            return handlerPrice[filterBy.price](Number(product.product_price)) &&
                (product.categoryId === filterBy.category || filterBy.category === '')
                && (product.product_type === filterBy.type || filterBy.type === '')
        }
        return (product.categoryId === filterBy.category || filterBy.category === '')
            && (product.product_type === filterBy.type || filterBy.type === '')
    })
}
console.log('dfdfsfsfd---------------------------------', filterProduct())
export default filterProduct