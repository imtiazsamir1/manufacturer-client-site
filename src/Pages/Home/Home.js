import React from "react";
import Review from "../Review/Review";
import AvailableParts from "./AvailableParts";

import Banner from "./Banner";
import Cards from "./Cards";

import Parts from "./Parts";

const Home = () => {
  return (
    <div className="justify-center">
      <Banner></Banner>
      {/* <Parts></Parts> */}
      {/* <Cards></Cards> */}
      <AvailableParts></AvailableParts>
      <Review></Review>
    </div>
  );
};

export default Home;
