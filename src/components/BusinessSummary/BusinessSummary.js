import React from "react";
import "./Business.css";
import { GiProfit } from "react-icons/gi";
import { VscFeedback } from "react-icons/vsc";
import { BsTools } from "react-icons/bs";
import { IoIosPerson } from "react-icons/io";
const BusinessSummary = () => {
  return (
    <div className="max-w-7xl mx-auto px-12">
      {" "}
      <h1 className="text-5xl text-center  mt-10 font-bold">
        Business Summary
      </h1>
      <div className=" container ">
        <div className=" grid my-20 grid-cols-1  lg:grid-cols-4 gap-20">
          <div>
            <GiProfit className="text-size"></GiProfit>
            <p className="text-3xl font-bold"> 120M+ Annual revenue</p>
          </div>
          <div>
            <VscFeedback className="text-size"></VscFeedback>
            <p className="text-3xl font-bold"> 33K+ Reviews</p>
          </div>
          <div>
            <BsTools className="text-size"></BsTools>
            <p className="text-3xl font-bold">50+ Tools</p>
          </div>
          <div>
            <IoIosPerson className="text-size"></IoIosPerson>
            <p className="text-3xl font-bold">Served 100+ customers</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BusinessSummary;
