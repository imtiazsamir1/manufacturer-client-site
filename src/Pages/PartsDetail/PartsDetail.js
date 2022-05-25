import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const PartsDetail = () => {
  const { partId } = useParams();
  const [part, setPart] = useState({});

  useEffect(() => {
    const url = `http://localhost:5000/part/${partId}`;
    console.log(url);
    fetch(url)
      .then((res) => res.json())
      .then((data) => setPart(data));
  }, []);
  return (
    <div>
      <h1>hlw</h1>
      <h2>You are about to book: {part.name}</h2>
    </div>
  );
};

export default PartsDetail;
