import React from 'react';
import { Link } from 'react-router';

const Logo = () => {
    return (
        <Link to={"/"}>
            <img src="/logo.svg" alt="SteadFast Logo" className='w-32 sm:w-full' />
        </Link>
    );
};

export default Logo;