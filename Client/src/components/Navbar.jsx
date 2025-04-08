import React from "react";
import Logo from "./Logo";
import { Link, NavLink } from "react-router";
import { assets } from "../assets/assets";

const Navbar = () => {
  return (
    <div className="py-4 shadow-md backdrop-blur-lg">
      <div className="container mx-auto px-4 flex justify-between items-center text-center">
        <Logo />

        {/* Nav Link */}
        <ul className="nav-links flex items-center gap-5 text-[#171717]">
          <NavLink
            className="hover:text-[#00A486] text-[16px] transition duration-200 ease-in-out"
            to={"/pricing"}
          >
            Pricing
          </NavLink>
          <NavLink
            className="hover:text-[#00A486] text-[16px] transition duration-200 ease-in-out"
            to={"/coverage"}
          >
            Coverage
          </NavLink>
          <NavLink
            className="hover:text-[#00A486] text-[16px] transition duration-200 ease-in-out"
            to={"/about"}
          >
            About Us
          </NavLink>
          <NavLink
            className="hover:text-[#00A486] text-[16px] transition duration-200 ease-in-out"
            to={"/contact"}
          >
            Contact
          </NavLink>
        </ul>

        {/* Right Side Buttons */}
        <div>
          {/* Track Parcel Link */}
          <Link
            to={"/track-parcel"}
            className="text-[#00A486] flex items-center gap-2"
          >
            <img src={assets.parcel_track_icon} alt="" />
            <span>Track Parcel</span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
