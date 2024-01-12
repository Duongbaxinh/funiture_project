import React, { useState } from 'react';
import { Link } from 'react-router-dom'
import { ReactComponent as SvgIconArrowRS } from '../../assets/svg/icon_arrowRS.svg';
import { ReactComponent as SvgIconPercent } from '../../assets/svg/ticket-percent.svg';
import './styles.scss'
import GroupStepCard from './GroupStepCard';
import ShoppingCart from './ShoppingCart';
import CardShipping from '../../components/smaler/CardShipping/CardShipping';
import { caculatePriceCart } from '../../util/CaculatePriceCart';
import ContactInformation from './ContactInformation';
import { CartContextState } from '../../context/ProductCartContext';
import Commplement from './Commplement';

const shippings = [
    {
        title: 'Free shipping',
        value: 'freeShipping',
        price: 0
    },
    {
        title: 'Express shipping',
        value: 'expressShipping',
        price: 20000
    },
    {
        title: 'Pick up',
        value: 'pickup',
        price: 15000
    },
]
function Cart(props) {
    const { dataProduct, handleQuantity, handleRemoveProduct } = CartContextState()
    const steps = [
        {
            icon: 1,
            label: 'Shopping cart'
        },
        {
            icon: 2,
            label: 'Checkout details'
        },
        {
            icon: 3,
            label: 'Order complete'
        },
    ]
    const [currentStep, setCurrenStep] = useState(0)
    const [shipping, setShipping] = useState(shippings[0].price)

    const handleChooseShipping = (value) => {
        console.log('check value', value)
        const findShipping = shippings.find((ship) => ship.value === value)
        setShipping(findShipping.price)
    }
    const handleUpStep = () => {
        setCurrenStep(currentStep + 1)
    }
    return (
        <div className='cart'>
            <div className='cart_linkpage'>
                <Link>Home</Link> <span> <i><SvgIconArrowRS /></i>Cart</span>
            </div>
            <h1 style={{ fontWeight: 'bold' }}>SHOPPING CART</h1>
            <GroupStepCard steps={steps} currentStep={currentStep} />
            <> {
                currentStep >= 2 ?
                    (<Commplement />) :
                    (
                        <div className="cart_checkout">
                            <>
                                <div className='cart_checkoutProduct'>
                                    {currentStep < 1 && <ShoppingCart products={dataProduct}
                                        onHandleQuatity={handleQuantity}
                                        onRemoveProduct={handleRemoveProduct}
                                    />}
                                    {currentStep === 1 && <ContactInformation onStep={handleUpStep} />}
                                    <div className="cart_coupon">
                                        <h1>Have a coupon?</h1>
                                        <p>Add your code for an instant cart discount</p>
                                        <div className="cart_coupon--code">
                                            <div style={{
                                                display: 'flex',
                                                alignItems: 'center',
                                                gap: '5px'
                                            }}>
                                                <i><SvgIconPercent /></i>
                                                <p>Coupon code</p></div>
                                            <p>Apply</p>
                                        </div>
                                    </div>
                                </div></>
                            <div className="cart_checkoutPrice">
                                <h1>Cart Summary</h1>
                                {shippings.map(({ title, value, price }, index) =>
                                    <CardShipping key={index}
                                        title={title}
                                        value={value}
                                        tralling={price}
                                        onFunction={handleChooseShipping}
                                        name={'shipping'}
                                    />)}
                                <div className="cart_checkoutPrice--total">
                                    <p>Subtotal</p>
                                    <p>{caculatePriceCart(dataProduct)}$</p>
                                </div>
                                <hr style={{ width: '100%' }} />
                                <div className="cart_checkoutPrice--total">
                                    <p>TOTAL</p>
                                    <p>{caculatePriceCart(dataProduct) + shipping}$</p>
                                </div>
                                <button className='cart_checkoutPrice--btn'
                                    onClick={handleUpStep}
                                >CHECKOUT</button>
                            </div>
                        </div>
                    )
            }


            </>

        </div>
    );
}

export default Cart;