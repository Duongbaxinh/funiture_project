import React from 'react';
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from '@hookform/resolvers/yup'
import './styles.scss';
import { ReactComponent as SvgIconMoney } from '../../assets/svg/icon_money.svg';
import CardShipping from '../../components/smaler/CardShipping/CardShipping';
const schema = yup.object({
    firstname: yup.string().required(),
    lastname: yup.string().required(),
    phonenumber: yup.string().required(),
    email: yup.string().email().required(),
}).required()
const inputs = [
    {
        id: 1,
        label: "firstname",
        title: 'First Name',
    },
    {
        id: 2,
        label: "lastname",
        title: 'Last Name',
    },
    {
        id: 3,
        label: "phonenumber",
        title: 'Phone Number',
    },
    {
        id: 4,
        label: "email",
        title: 'Email Address',
    },

]
const address = [
    {
        id: 1,
        label: "street",
        title: 'Street Address',
    },
    {
        id: 2,
        label: "country",
        title: 'Country',
    },
    {
        id: 3,
        label: "towncity",
        title: 'Town City',
    },
    {
        id: 4,
        label: "state",
        title: 'State',
    },
    {
        id: 5,
        label: "zipcode",
        title: 'Zip Code',
    },

]
const card = [
    {
        id: 1,
        label: "cardnumber",
        title: 'Card Number',
    },
    {
        id: 2,
        label: "expireay",
        title: 'Expiration Date',
    },
    {
        id: 3,
        label: "cvc",
        title: 'Cvc Code',
    },


]
const shippings = [
    {
        title: 'Pay by Card Credit',
        value: 'creditcard',
        trailing: <SvgIconMoney />
    },
    {
        title: 'Paypal',
        value: 'paypal',
        trailing: ''
    },

]
function ContactInformation({ onStep }) {
    const { handleSubmit, register, formState: { errors } } = useForm(
        { resolver: yupResolver(schema) }
    )
    const onSubmit = (infor) => {
        console.log(infor);
        onStep()
    }
    return (
        <div className='contact'>
            <h1>Contact Information</h1>
            <info className='contact_info'>
                {inputs.map(({ id, label, title }) => (
                    <div key={id} className={`contact_info--input input${id}`}>
                        <h3>{title.toUpperCase()}</h3>
                        <input type="text"
                            placeholder={`Your ${title}`}
                            {...register(label)}
                        />
                    </div>
                ))}
            </info>

            <h1>Shipping Address</h1>
            <form className="contact_address">
                {address.map(({ id, label, title }) => (
                    <div key={id} className={`contact_address--input input${id}`}>
                        <h3>{title.toUpperCase()}</h3>
                        <input type="text"
                            placeholder={`Your ${title}`}
                            {...register(label)}
                        />
                    </div>
                ))}

            </form>


            <h1>Payment Method</h1>
            <div className="contact_paymethod">
                {shippings.map(({ title, value, trailing }, index) => (
                    <CardShipping
                        key={index}
                        title={title}
                        tralling={trailing}
                        value={value}
                        register={{ ...register(value) }}
                        name={'payment'}
                    />
                ))}
                <hr style={{ width: '100%' }} />

                <form className="contact_paymethod--form">
                    {
                        card.map(({ id, label, title }) => (
                            <div key={id} className={`contact_paymethod--input input${id}`}>
                                <h3>{title.toUpperCase()}</h3>
                                <input type="text"
                                    placeholder={`Your ${title}`}
                                    {...register(label)}
                                />
                            </div>
                        ))
                    }
                </form>
            </div>
            <button className='contact_paymethod--btn'
                onClick={handleSubmit(onSubmit)}>
                {'place order'.toUpperCase()}</button>
        </div>
    );
}

export default ContactInformation;