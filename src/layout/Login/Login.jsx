import { Link, useNavigate } from 'react-router-dom';
import LoginImage from '../../assets/images/login.jpg'
import './Login.scss';
import axios from 'axios';
import { useForm } from 'react-hook-form';
function Login(props) {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm()
    const navigate = useNavigate()
    const onSubmit = async (dataLogin) => {
        console.log('check data login', dataLogin)
        try {
            const { data } = await axios.post('http://localhost:8080/api/v1/access/login', {
                email: dataLogin.email,
                password: dataLogin.password
            })
            localStorage.setItem('userInfo', JSON.stringify(data.metadata))
            alert('login successfully!')
            navigate('/home')
            console.log('check login :::: ', data)
        } catch (error) {
            console.log(error)
        }
    }
    return (
        <div className='container1'>
            <div className='main'>
                <div className='login1'>
                    <h1 className='h1'>Log in</h1>
                    <div className='link'>
                        <h3 className='h3'>Don't have an accout yet?</h3>
                        <Link to={'/register'} >Sign Up</Link>
                    </div>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className='email'>
                            <input {...register("email")} type="text" placeholder="Email " />
                            <small>{errors && 'please enter '}</small>
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
                        <button className='Signin' type="submmit"  >
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

export default Login;