import React from "react";
import { useNavigate } from "react-router-dom";

const Part = ({ part }) => {
  const { _id, name, img, price } = part;

  const navigate = useNavigate();
  const navigateToPartsDetail = (id) => navigate(`/part/${id}`);
  return (
    <div class="card w-96 bg-primary text-primary-content  ">
      <div class="card-body">
        <h2 class="card-title">{name}</h2>
        <img src={img} alt="" />
        <p>{price}</p>
        <div class="card-actions justify-end">
          <button class="btn">Buy Now</button>
        </div>
      </div>
    </div>
  );
};

export default Part;
