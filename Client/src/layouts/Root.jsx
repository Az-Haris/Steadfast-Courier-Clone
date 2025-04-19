import React from 'react';
import { Outlet } from 'react-router';
import Navbar from '../components/Navbar';
import Breadcrumbs from '../components/Breadcrumbs';
import GoToTop from '../components/GoToTop';

const Root = () => {
    return (
        <>
            <Navbar/>
            <Breadcrumbs/>
            <Outlet></Outlet>
            <GoToTop/>
        </>
    );
};

export default Root;