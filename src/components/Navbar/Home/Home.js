import React from "react";
import bannerImg from "../../../Assets/img/banner-img.png";
import Parts from "../../../Parts/Parts";
import BusinessSummary from "../../BusinessSummary/BusinessSummary";
import GetInTouch from "./GetInTouch";
import Partners from "./Partners";
import Reviews from "./Reviews";

const Home = () => {
  return (
    <div>
      <div className="hero min-h-screen bg-primary text-white">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <img
            src={bannerImg}
            className="lg:max-w-full xs:max-w-xs rounded-lg "
            alt=""
          />
          <div className="lg:container sm:container ">
            <h1 className="text-5xl font-bold">Bangle Bike parts</h1>
            <p className="py-6">
              Enjoy entirely new level of driving experiance with our in depth
              selection of superior bike engine,bike bulbs, brake pads, spark
              plugs, and other accessories designed to keep your bike running at
              its absolute best..
            </p>
          </div>
        </div>
      </div>
      <Parts></Parts>
      <BusinessSummary></BusinessSummary>
      <Partners></Partners>
      <Reviews></Reviews>
      <GetInTouch></GetInTouch>
    </div>
  );
};

export default Home;
