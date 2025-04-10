import React from "react";
import { assets } from "../../assets/assets";
import Container from "../Container";
import Button from "../Button";

const Banner = () => {
  return (
    <section
      style={{ backgroundImage: `url(${assets.intro_bg})` }}
      className="bg-no-repeat bg-cover bg-top pt-24"
    >
      <Container className="flex justify-between">
        <div className="pt-20 space-y-10">
            <h1 className="text-5xl font-bold text-[#212529] leading-15">We Deliver <br /> Parcel on Time with <br /> no Hassle</h1>
          <p>Easy Tracking, fast Payment, and safe Delivery across country.</p>
          <Button size="lg" to={"/register"}>
            Become a Merchant
          </Button>
        </div>
        <div>
          <img src={assets.rider} alt="" />
        </div>
        <div className="flex flex-col gap-8 pt-20">
          <div className="flex items-center gap-4">
            <img
              className="border-2 p-3 rounded-sm border-white bg-white/40"
              src={assets.sm_merchant}
              alt=""
            />
            <div>
              <h3 className="text-3xl font-semibold">300k+</h3>
              <small className="text-sm text-neutral-400">Registered Merchant</small>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <img
              className="border-2 p-3 rounded-sm border-white bg-white/40"
              src={assets.sm_rider}
              alt=""
            />
            <div>
              <h3 className="text-3xl font-semibold">10k+</h3>
              <small className="text-sm text-neutral-400">Delivery Man</small>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <img
              className="border-2 p-3 rounded-sm border-white bg-white/40"
              src={assets.sm_hub}
              alt=""
            />
            <div>
              <h3 className="text-3xl font-semibold">500+</h3>
              <small className="text-sm text-neutral-400">Delivery Point</small>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Banner;
