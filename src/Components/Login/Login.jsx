import React from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
    return (
        <div className='form-container'>
            <h1 className='form-title'>Login</h1>
            <form action="" className='form-body'>
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