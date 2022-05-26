import React, { useEffect, useState } from "react";
import Purchase from "../Purchase/Purchase";
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
        {parts.map((purchase) => (
          <Purchase key={purchase._id} purchase={purchase}></Purchase>
        ))}
      </div>
    </div>
  );
};

export default AvailableParts;
