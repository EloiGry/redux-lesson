import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => {
    return (
        <div className='flex'>
            <Link to='/'> Counter </Link>
            <Link to='/posts'> Posts </Link>
        </div>
    );
};

export default NavBar;