import React from "react";
import { useNavigate } from "react-router-dom";

const Purchase = ({ purchase }) => {
  const { _id, name, img, price, availableQuantity } = purchase;

  const navigate = useNavigate();
  const navigateToPartsDetail = (id) => navigate(`/purchase/${id}`);
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

export default Purchase;
