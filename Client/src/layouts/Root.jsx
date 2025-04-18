import React from 'react';
import { Outlet } from 'react-router';
import Navbar from '../components/Navbar';
import Breadcrumbs from '../components/Breadcrumbs';

const Root = () => {
    return (
        <>
            <Navbar/>
            <Breadcrumbs/>
            <Outlet></Outlet>
        </>
    );
};

export default Root;