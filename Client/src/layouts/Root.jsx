import React from 'react';
import { Outlet } from 'react-router';
import Navbar from '../components/Navbar';
import Breadcrumbs from '../components/Breadcrumbs';

const Root = () => {
    return (
        <div>
            <Navbar/>
            <Breadcrumbs/>
            <Outlet></Outlet>
        </div>
    );
};

export default Root;