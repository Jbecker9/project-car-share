import React, { useContext } from 'react';
import { UserContext } from '../context/user';
import '../styles/App.css';
import LogIn from './LogIn';
import NavRoutes from './NavRoutes';

function UserCheck() {
    const { userState } = useContext(UserContext)


    if (!userState) {
        return <LogIn />
    } else {
        return <NavRoutes />
    }
}

export default UserCheck;