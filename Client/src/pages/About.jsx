import React from "react";
import { assets } from "../assets/assets";
import Container from "../components/Container";

const About = () => {
  return (
    <div>
      <div className="text-center py-10 sm:py-16 mt-16 sm:mt-20 bg-gradient-to-br from-primary/40 to-primary/90">
        <h3 className="text-xl sm:text-3xl font-semibold text-white">
          Grow with SteadFast
        </h3>
      </div>

      {/* About */}
      <Container>
        <section className="flex flex-col lg:flex-row gap-10 mt-16">
          <div className="space-y-5 flex-1 text-center lg:text-left">
            <p className="text-xl font-medium text-gray-400">About Us</p>
            <h2 className="text-3xl sm:text-5xl font-semibold leading-10 sm:leading-15">
              We Provide The <br />
              Best Quality Courier Services
            </h2>
            <p className="text-gray-600 text-lg">
              Steadfast courier is a leading courier service company in
              Bangladesh dedicated to delivering reliable and efficient e-
              commerce logistics solutions in time.
            </p>
            <ul className="text-lg text-gray-800 flex flex-col items-center lg:items-start gap-2">
              <li className="flex items-center gap-2">
                <img src={assets.tik_mark} alt="" />
                Daily pickups, no limitations
              </li>
              <li className="flex items-center gap-2">
                <img src={assets.tik_mark} alt="" />
                Faster Payment Service
              </li>
              <li className="flex items-center gap-2">
                <img src={assets.tik_mark} alt="" />
                Cash on Delivery
              </li>
            </ul>
          </div>
          <div className="w-full lg:flex-1">
            <img className="w-full" src={assets.about_img} alt="" />
          </div>
        </section>

        {/* Mission Vision */}
        <div className="flex flex-col md:flex-row gap-10 mt-28">
          <div className="space-y-3 flex-1">
            <img src={assets.mission} alt="" />
            <h3 className="text-2xl font-semibold">Our Mission</h3>
            <p className="text-gray-600 text-lg">
              To put a smile on your face by providing fast, secure, and
              hassle-free deliveries. We're here to connect people and
              e-commerce businesses worldwide with fast, secure, and top-notch
              service.
            </p>
          </div>
          <div className="space-y-3 flex-1">
            <img src={assets.vision} alt="" />
            <h3 className="text-2xl font-semibold">Our Vision</h3>
            <p className="text-gray-600 text-lg">
              Redefine the future of e-commerce logistics in Bangladesh through
              innovative solutions powered by modern technologies.
            </p>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default About;
