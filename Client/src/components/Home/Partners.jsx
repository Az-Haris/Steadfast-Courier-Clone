import React from "react";
import Marquee from "react-fast-marquee";
import { assets } from "../../assets/assets";

const Partners = () => {
  return (
    <Marquee className="my-5 gap-10">
      <div className="flex items-center gap-10">
        <img className="w-36" src={assets.sm_ghor} alt="" />
        <img className="w-36" src={assets.sm_halal_food} alt="" />
        <img className="w-36" src={assets.rokomari} alt="" />
        <img className="w-36" src={assets.naturo01} alt="" />
        <img className="w-36" src={assets.sm_online} alt="" />
        <img className="w-36" src={assets.othoba} alt="" />
        <img className="w-36" src={assets.lotto} alt="" />
        <img className="w-36" src={assets.sailor} alt="" />
        <img className="w-36" src={assets.fashion} alt="" />
        <img className="w-36" src={assets.htbazar} alt="" />
      </div>
    </Marquee>
  );
};

export default Partners;
