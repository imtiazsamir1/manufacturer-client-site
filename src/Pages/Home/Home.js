import React from "react";
import AvailableParts from "./AvailableParts";

import Banner from "./Banner";
import Cards from "./Cards";
import Part from "./Part";
import Parts from "./Parts";

const Home = () => {
  return (
    <div className="justify-center">
      <Banner></Banner>
      <Parts></Parts>
      <Cards></Cards>
      <AvailableParts></AvailableParts>
      <Part></Part>
    </div>
  );
};

export default Home;
