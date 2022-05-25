import React from "react";
import { useNavigate } from "react-router-dom";

const Part = ({ part }) => {
  const { _id, name, img, price } = part;

  const navigate = useNavigate();
  const navigateToPartsDetail = (id) => navigate(`/part/${id}`);
  return (
    <div>
      <h1>{name}</h1>
      <img src={img} alt="" />
      <h1>{price}</h1>
      <button onClick={() => navigateToPartsDetail(_id)} class="btn">
        Button
      </button>
    </div>
  );
};

export default Part;
