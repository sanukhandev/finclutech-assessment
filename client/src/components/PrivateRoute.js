import React, {useContext} from 'react'
import {Navigate, Outlet, Route} from 'react-router-dom'
import {AuthContext} from "../App";

const PrivateRoute = () => {


    const isLoggedIn = localStorage.getItem('token');

    return (
        isLoggedIn ?
            <Outlet /> : <Navigate to="/login" />
    )

}

export default PrivateRoute
