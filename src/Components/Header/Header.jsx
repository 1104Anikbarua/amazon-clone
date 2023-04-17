import React, { useContext } from 'react';
import logo from '/images/Logo.svg'
import './Header.css'
import { NavLink } from 'react-router-dom';
import { AuthContext } from '../AuthProvider/AuthProvider';

const Header = () => {
    const { user, logout } = useContext(AuthContext);
    return (
        <nav className='header'>
            <img src={logo} alt="" />
            <div>
                <NavLink to={"/shop"}>Shop</NavLink>
                <NavLink to={"/orders"}>Orders</NavLink>
                <NavLink to={"/inventory"}>Inventory</NavLink>

                {
                    user ?
                        <NavLink
                            onClick={logout}
                            to={"/login"}>Logout</NavLink>
                        :
                        <NavLink to={"/login"}>Login</NavLink>

                }

                {!user && <NavLink to={"/register"}>Register</NavLink>}
            </div>
        </nav>
    );
};

export default Header;