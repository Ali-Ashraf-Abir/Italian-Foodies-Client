import { Spinner } from 'flowbite-react';
import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../AuthProvider/AuthProvider';

const PrivateRoute = ({children}) => {

    const {loggeduser,loading}=useContext(AuthContext)
    const location =useLocation()
    
    if(loading){
        return <Spinner aria-label="Default status example" />
    }
    if (loggeduser){
        return children;
    }

    return <Navigate state={{from:location}} to='/login' replace></Navigate>
};

export default PrivateRoute;