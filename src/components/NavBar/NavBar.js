import React from 'react';
import { Bars3Icon } from '@heroicons/react/24/solid'
import { Link } from 'react-router-dom';
const NavBar = () => {
    return (
        <nav>
            <Link to='/'>Home</Link>
            <Link to='/statistics'>Statistics</Link>
            <Link to='/blog'>Blog</Link>
        </nav>
    );
};

export default NavBar;