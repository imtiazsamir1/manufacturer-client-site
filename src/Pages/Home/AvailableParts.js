import React, { useEffect, useState } from "react";
import Purchase from "../Purchase/Purchase";

const AvailableParts = () => {
  const [parts, setParts] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/part")
      .then((res) => res.json())
      .then((data) => setParts(data));
  }, []);
  return (
    <div className="max-w-7xl mx-auto px-12">
      <h1 className="text-4xl py-12">Our Products</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {parts.map((purchase) => (
          <Purchase key={purchase._id} purchase={purchase}></Purchase>
        ))}
      </div>
    </div>
  );
};

export default AvailableParts;
