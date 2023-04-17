import React from 'react';
import './Register.css'
import { Link } from 'react-router-dom';

const Register = () => {
    return (
        <div className='form-container'>
            <h1 className='form-title'>Sign Up</h1>
            <form action="" className='form-body'>
                <div>
                    <label htmlFor="Email">Email</label>
                    <input type="email" name="email" id="email" />
                </div>
                <div>
                    <label htmlFor="password">Password</label>
                    <input type="password" name="password" id="password" />
                </div>
                <div>
                    <label htmlFor="confirmpassword">Confirm Password</label>
                    <input type="password" name="confirmpassword" id="confirm-password" />
                </div>
                <input type="submit" value="Sign Up" />
                <small>Already have an account? <Link to={'/login'}
                    className='toogle'
                > Login</Link></small>
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

export default Register;