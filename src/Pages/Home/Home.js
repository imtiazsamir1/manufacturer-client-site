import React from "react";
import AvailableParts from "./AvailableParts";

import Banner from "./Banner";
import Cards from "./Cards";

import Parts from "./Parts";

const Home = () => {
  return (
    <div className="justify-center">
      <Banner></Banner>
      <Parts></Parts>
      <Cards></Cards>
      <AvailableParts></AvailableParts>
    </div>
  );
};

export default Home;
