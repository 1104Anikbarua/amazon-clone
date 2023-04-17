import React, { useContext } from 'react';
import { AuthContext } from '../AuthProvider/AuthProvider';
import { Navigate, useLocation } from 'react-router-dom';

const RequireAuth = ({ children }) => {
    const { user } = useContext(AuthContext);
    const location = useLocation();

    if (!user) {
        return <p>Loading</p>
    }

    if (user) {
        return children;
    }

    return <Navigate to={'/login'} state={{ from: location }} replace></Navigate>;
};

export default RequireAuth;