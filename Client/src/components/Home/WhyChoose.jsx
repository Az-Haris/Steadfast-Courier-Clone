import React from "react";
import { assets } from "../../assets/assets";
import Container from "../Container";

const WhyChoose = () => {
  return (
    <Container className="mt-36">
      <h2 className="text-center text-3xl max-w-96 mx-auto mb-12 font-semibold">
        Why you should choose Steadfast?
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
        <div className="px-5 py-10 rounded-3xl border border-gray-300 space-y-3">
          <img src={assets.daily_pickup} alt="" />
          <h2 className="text-2xl font-semibold">Daily pickup, no limits</h2>
          <p className="text-lg text-gray-500">
            Steadfast Courier gives you the opportunity of unlimited pickup.
          </p>
        </div>
        <div className="px-5 py-10 rounded-3xl border border-gray-300 space-y-3">
          <img src={assets.cod} alt="" />
          <h2 className="text-2xl font-semibold">Cash on Delivery</h2>
          <p className="text-lg text-gray-500">
            At Steadfast Courier we will collect the cash on behalf of you.
          </p>
        </div>
        <div className="px-5 py-10 rounded-3xl border border-gray-300 space-y-3">
          <img src={assets.payment} alt="" />
          <h2 className="text-2xl font-semibold">Faster Payment Service</h2>
          <p className="text-lg text-gray-500">
            We provides multiple payment methods such as cash, Bank or Mobile
            Banking
          </p>
        </div>
        <div className="px-5 py-10 rounded-3xl border border-gray-300 space-y-3">
          <img src={assets.management} alt="" />
          <h2 className="text-2xl font-semibold">Online Management</h2>
          <p className="text-lg text-gray-500">
            You can get all the information you need in your own user dashboard.
          </p>
        </div>
        <div className="px-5 py-10 rounded-3xl border border-gray-300 space-y-3">
          <img src={assets.tracking} alt="" />
          <h2 className="text-2xl font-semibold">Real-Time Tracking</h2>
          <p className="text-lg text-gray-500">
            Steadfast Courier provides an unique tracking code for your every
            consignments.
          </p>
        </div>
        <div className="px-5 py-10 rounded-3xl border border-gray-300 space-y-3">
          <img src={assets.support} alt="" />
          <h2 className="text-2xl font-semibold">24/7 Customer Service</h2>
          <p className="text-lg text-gray-500">
            Our Call Center Executives are always ready 24/7 to help you with
            your problems.
          </p>
        </div>
      </div>
    </Container>
  );
};

export default WhyChoose;
