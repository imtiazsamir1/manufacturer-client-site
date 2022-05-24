import React, { useEffect, useState } from "react";
import Part from "./Part";

const AvailableParts = () => {
  const [parts, setParts] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/part")
      .then((res) => res.json())
      .then((data) => setParts(data));
  }, []);
  return (
    <div>
      <h1>{parts.length}</h1>
      <div>
        {parts.map((part) => (
          //
          <div>
            <h1>{part.name}</h1>
            <img src={part.img} alt="" />
            <h1>{part.description}</h1>
            <h3>{part.minOrder}</h3>
            <h3>{part.availableQuantity}</h3>
            <h1>{part.price}</h1>
            <button class="btn btn-xs sm:btn-sm md:btn-md lg:btn-lg">
              Buy Now
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AvailableParts;
