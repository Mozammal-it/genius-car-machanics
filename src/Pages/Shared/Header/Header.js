import React from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';

const Header = () => {
    const {user, logOut} = useAuth()
    return (
        <nav className="bg-primary p-4">
            <Link className="text-white p-4" to='/home'>Home</Link>
            <Link className="text-white p-4" to='/service'>Service</Link>
            {
                user?.email ?
                <button onClick={logOut} className="btn btn-danger">Log Out</button> :
                <Link to='/login'>
                    <button className="btn btn-danger">Login</button>
                </Link> 
            }
            <Link className="text-white p-4" >{user?.displayName}</Link>
            
        </nav>
    );
};

export default Header;