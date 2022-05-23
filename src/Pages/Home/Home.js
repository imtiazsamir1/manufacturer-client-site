import React from "react";
import Banner from "./Banner";
import Cards from "./Cards";
import Parts from "./Parts";

const Home = () => {
  return (
    <div className="justify-center">
      <Banner></Banner>
      <Parts></Parts>
      <Cards></Cards>
    </div>
  );
};

export default Home;
