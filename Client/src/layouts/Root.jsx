import React from 'react';
import { Outlet } from 'react-router';
import Navbar from '../components/Navbar';
import Breadcrumbs from '../components/Breadcrumbs';
import GoToTop from '../components/GoToTop';
import Footer from '../components/Footer';

const Root = () => {
    return (
        <>
            <Navbar/>
            <Breadcrumbs/>
            <Outlet></Outlet>
            <Footer/>
            <GoToTop/>
        </>
    );
};

export default Root;