import React, { useRef } from 'react';
import axios from 'axios'
import './styles.scss'
import { ReactComponent as SvgIcon } from '../../assets/svg/icon_cart.svg';
function HomePage(props) {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const emailRef = useRef(null);
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const passwordRef = useRef(null);
    const login = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post(
                'http://localhost:8080/api/v1/access/login',
                {
                    email: emailRef.current.value,
                    password: passwordRef.current.value,
                },
                {
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    withCredentials: true,
                }
            );
            console.log('Check response:', response);
        } catch (error) {
            console.error('Error during login:', error);
        }
    };
    const refreshToken = async () => {
        try {
            const response = await axios.get(
                'http://localhost:8080/api/v1/test/refreshToken',
                {
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    withCredentials: true,
                }
            );
            console.log('Check response:', response);
        } catch (error) {
            console.error('Error during login:', error);
        }
    }
    return (
        <div>
            <h1 >check authenticatio</h1>
            <h2 >check authenticatio</h2>
            <h3 >check authenticatio</h3>
            <h4 >check authentication</h4>
            <button className='icon_button'>
                <SvgIcon />
            </button>
            <form >
                <input type="text" ref={emailRef} placeholder='Email...' />
                <input type="text" ref={passwordRef} placeholder='Password...' />
            </form>
            <button onClick={login}>login</button>
            <button onClick={refreshToken}>check refreshToken</button>
        </div>
    );
}

export default HomePage;