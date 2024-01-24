import React from 'react';
import { useForm } from "react-hook-form";
import { Link, useNavigate } from 'react-router-dom';
import LoginImage from '../../assets/images/login.jpg';
import axios from 'axios';
import { useToast } from '@chakra-ui/react';


function Register(props) {
    const toast = useToast()
    const navigate = useNavigate()
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm()
    const onSubmit = async (data) => {
        try {
            const register = await axios.post('http://localhost:8080/api/v1/access/register', {
                email: data.email,
                password: data.password
            })
            if (register.status === 200) {
                toast({
                    title: 'Register successfull',
                    description: ' successfull',
                    status: 'success',
                    duration: 3000,
                    isClosable: true,
                });
            }
            navigate('/login')

        } catch (error) {
            toast({
                title: 'Error',
                description: 'error',
                status: 'error',
                duration: 3000,
                isClosable: true,
            });
        }
    }
    return (
        <div className='container1'>
            <div className='main'>
                <div className='login1'>
                    <h1>Sign up</h1>
                    <div className='link'>
                        <h3>Don't have an accout yet?</h3>
                        <Link to={'/Login'} >Sign in</Link>
                    </div>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className='email'>
                            <input {...register("yourName")} type="text" placeholder="Your Name " />
                        </div>
                        <div className='email'>
                            <input {...register("username")} type="text" placeholder="UserName " />
                        </div>
                        <div className='email'>
                            <input {...register("email")} type="text" placeholder="Email " />
                        </div>
                        <div className='password'>
                            <input {...register("password")} type="password" placeholder="Password" />
                        </div>
                        <div>

                            <div style={{ marginTop: '20px' }}>
                                <input type="checkbox" />
                                Remember me
                                <Link style={{ marginLeft: '95px' }}>Forgot password</Link>
                            </div>
                        </div>
                        <button className='Signin' type="submit" >
                            Sign in
                        </button>

                    </form>
                </div>
                <div className='login2'>
                    <img src={LoginImage} style={{ width: '100%', borderRadius: '0px 5px 5px 0px' }} />
                </div>
            </div>
        </div>
    );
}

export default Register;