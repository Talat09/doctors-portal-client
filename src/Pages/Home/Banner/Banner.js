import React from "react";
import banner from "../../../assets/images/chair.png";
import "./Banner.css";
const Banner = () => {
  return (
    <div className="hero banner">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <img src={banner} className="lg:w-1/2 rounded-lg shadow-2xl" alt="" />
        <div>
          <h1 className="text-5xl font-bold">Your New Smile Starts Here</h1>
          <p className="py-6">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>
          <button className="btn btn-primary bg-gradient-to-r from-secondary to-primary text-white">
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
