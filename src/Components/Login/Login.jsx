import React, { useContext, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../AuthProvider/AuthProvider';

const Login = () => {
    const { signIn, user } = useContext(AuthContext);

    const navigate = useNavigate();
    const location = useLocation();
    let from = location.state?.from?.pathname || '/';
    const handleSignIn = (event) => {
        event.preventDefault();
        const email = event.target.email.value;
        const password = event.target.password.value;

        signIn(email, password)
            .then((result) => {
                const user = result.user;
                navigate(from, { replace: true });
                console.log(user)

            })
            .catch((error) => {
                const errorCode = error.code;
                console.log(errorCode)
            })
        event.target.reset();
    }
    // useEffect(() => {
    //     if (user) {
    //         navigate('/shop')
    //     }
    // }, [])
    return (
        <div className='form-container'>
            <h1 className='form-title'>Login</h1>
            <form onSubmit={handleSignIn} action="" className='form-body'>
                <div>
                    <label htmlFor="Email">Email</label>
                    <input type="email" name="email" id="email" />
                </div>
                <div>
                    <label htmlFor="password">Password</label>
                    <input type="password" name="password" id="password" />
                </div>

                <input type="submit" value="Login" />
                <small>New To This Website?<Link to={'/register'}
                    className='toogle'
                > Create New Account</Link></small>
                <div className='divider'>
                    <div className='line'></div>
                    or
                    <div className='line'></div>
                </div>
                <button>Continue With Google
                    <img src="" alt="" />
                </button>
            </form>
        </div>
    );
};

export default Login;