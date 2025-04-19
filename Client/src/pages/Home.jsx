import React from 'react';
import Banner from '../components/Home/Banner';
import Partners from '../components/Home/Partners';
import Services from '../components/Home/Services';
import WhyChoose from '../components/Home/WhyChoose';
import Faq from '../components/Home/Faq';
import CallToAction from '../components/Home/CallToAction';

const Home = () => {
    return (
        <div>
            <Banner/>
            <Partners/>
            <Services/>
            <WhyChoose/>
            <Faq/>
            <CallToAction/>
        </div>
    );
};

export default Home;