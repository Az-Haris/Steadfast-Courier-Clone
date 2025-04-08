import React from 'react';
import { createBrowserRouter } from 'react-router';
import Root from '../layouts/Root';
import Pricing from '../pages/Pricing';
import Coverage from '../pages/Coverage';
import About from '../pages/About';
import Contact from '../pages/Contact';
import Home from '../pages/Home';

const Router = createBrowserRouter([
    {
        path: "/",
        element: <Root />,
        children: [
            {
                path: "/",
                element: <Home/>
            },
            {
                path: "/pricing",
                element: <Pricing/>
            },
            {
                path: "/coverage",
                element: <Coverage/>
            },
            {
                path: "/about",
                element: <About/>
            },
            {
                path: "/contact",
                element: <Contact/>
            },
        ]
    }
])

export default Router;