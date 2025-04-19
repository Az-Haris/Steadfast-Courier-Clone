import React from "react";
import Container from "./Container";
import Logo from "./Logo";
import { Link } from "react-router";
import { FaFacebookF, FaLinkedinIn, FaInstagram } from "react-icons/fa";
import { assets } from "../assets/assets";

const Footer = () => {
  return (
    <footer className="mt-36 border-t border-gray-300">
      <Container className="flex flex-col md:flex-row gap-10 justify-between py-20">
        <div>
          <div className="mb-3">
          <Logo />
          </div>
          <p>
            House# 44, Rd No. 2/A, Dhanmondi, <br />
            Dhaka 1209
          </p>
          <p className="my-2">E-mail: info@steadfast.com.bd</p>
          <p>Hotline: 09678-045045</p>
        </div>
        <div className="flex flex-col gap-3">
          <strong className="mb-3 text-xl font-semibold">Company</strong>
          <Link to={"/contact"} className="link">
            Contact Us
          </Link>
          <Link to={"/terms"} className="link">
            Terms and Conditions
          </Link>
        </div>
        <div className="flex flex-col gap-3">
          <strong className="mb-3 text-xl font-semibold">Sister Concern</strong>
          <Link to={"/"} className="link">
            Pixelax
          </Link>
          <Link to={"/"} className="link">
            Biggapon
          </Link>
        </div>
        <div className="flex flex-col gap-3">
          <strong className="mb-3 text-xl font-semibold">Follow Us</strong>
          <div className="flex items-center gap-3">
            <Link className="flex items-center justify-center border p-3 rounded-full text-xl text-gray-500 hover:text-primary hover:bg-primary/10 transition-all duration-300 ease-in-out">
              <FaFacebookF />
            </Link>
            <Link className="flex items-center justify-center border p-3 rounded-full text-xl text-gray-500 hover:text-primary hover:bg-primary/10 transition-all duration-300 ease-in-out">
              <FaLinkedinIn />
            </Link>
            <Link className="flex items-center justify-center border p-3 rounded-full text-xl text-gray-500 hover:text-primary hover:bg-primary/10 transition-all duration-300 ease-in-out">
              <FaInstagram />
            </Link>
          </div>
          <div className="flex gap-3 mt-3">
            <Link to={"/"}><img src={assets.apple_store} alt="" /></Link>
            <Link to={"/"}><img src={assets.play_store} alt="" /></Link>
          </div>
        </div>
      </Container>
      <p className="text-center px-4 mb-5">© 2016 - 2025 SteadFast Courier Ltd. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
