import React, { useEffect, useState } from "react";
import Logo from "./Logo";
import { Link, NavLink } from "react-router";
import { assets } from "../assets/assets";
import Button from "./Button";
import { IoIosMenu } from "react-icons/io";
import { RxCross1 } from "react-icons/rx";

const Navbar = () => {
  const [visible, setVisible] = useState(false);
  const [isSticky, setIsSticky] = useState(false);


  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 60);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <div className={`py-3 md:py-4 w-full z-20 fixed transition-all duration-500 ease-in-out transform ${
      isSticky ? "top-0 bg-white/50 backdrop-blur-2xl shadow-md opacity-100" : "-top-20 fixed opacity-100 translate-y-20"
    }`}
>
      <div className="max-w-screen-xl mx-auto px-4 flex flex-wrap gap-3 justify-between items-center text-center">
        <div className="flex items-center gap-3">
          <IoIosMenu
            onClick={() => setVisible(true)}
            className="lg:hidden text-3xl md:text-4xl p-0.5 shadow-sm cursor-pointer"
          />
          <Logo />
        </div>

        {/* Nav Link */}
        <ul className="nav-links hidden lg:flex items-center gap-5">
          <NavLink className="link" to={"/pricing"}>
            Pricing
          </NavLink>
          <NavLink className="link" to={"/coverage"}>
            Coverage
          </NavLink>
          <NavLink className="link" to={"/about"}>
            About Us
          </NavLink>
          <NavLink className="link" to={"/contact"}>
            Contact
          </NavLink>
        </ul>

        {/* Right Side Buttons */}
        <div className="flex items-center gap-10">
          {/* Track Parcel Link */}
          <Link
            to={"/coverage/track-parcel"}
            className="text-primary hidden sm:flex items-center gap-2 font-[500]"
          >
            <img src={assets.parcel_track_icon} alt="" />
            <span>Track Parcel</span>
          </Link>
          <div className="flex items-center gap-3">
            <Link className="link font-[500]" to={"/login"}>
              Login
            </Link>
            <Button size="responsive" to={"/register"}>
              Sign Up
            </Button>
          </div>
        </div>
      </div>

      {/* Sidebar menu for small screen */}
      <div
        className={`absolute top-0 left-0 bottom-0 overflow-hidden bg-white dark:bg-gray-800 transition-all z-10 min-h-screen lg:hidden ${
          visible ? "w-full" : "w-0"
        }`}
      >
        <div className="text-gray-600 dark:text-gray-300 mt-5">
          <div className="flex items-center justify-between shadow-md pb-3 mb-5 px-4">
            <Logo></Logo>
            <button onClick={() => setVisible(false)}>
              <RxCross1 className="text-3xl text-red-500 shadow-sm p-0.5 cursor-pointer" />
            </button>
          </div>
          <Link
            onClick={() => setVisible(false)}
            to={"/coverage/track-parcel"}
            className="text-primary sm:hidden flex items-center gap-2 font-[500] mb-5 ml-9"
          >
            <img src={assets.parcel_track_icon} alt="" />
            <span>Track Parcel</span>
          </Link>
          <div className="nav-links flex flex-col gap-2 px-4">
            <NavLink
              onClick={() => setVisible(false)}
              to={"/pricing"}
              className="py-2 pl-5 link"
            >
              Pricing
            </NavLink>
            <NavLink
              onClick={() => setVisible(false)}
              to={"/coverage"}
              className="py-2 pl-5 link"
            >
              Coverage
            </NavLink>
            <NavLink
              onClick={() => setVisible(false)}
              to={"/about"}
              className="py-2 pl-5 link"
            >
              About Us
            </NavLink>
            <NavLink
              onClick={() => setVisible(false)}
              to={"/contact"}
              className="py-2 pl-5 link"
            >
              Contact
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
