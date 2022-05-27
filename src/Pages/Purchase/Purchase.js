import React from "react";
import { useNavigate } from "react-router-dom";

const Purchase = ({ purchase }) => {
  const { _id, name, img, price, description, minOrder, availableQuantity } =
    purchase;

  const navigate = useNavigate();
  const navigateToPartsDetail = (id) => navigate(`/purchase/${id}`);
  return (
    // <div>
    //   <h1>{name}</h1>
    //   <img src={img} alt="" />

    //   <h1>{price}</h1>
    //   <button onClick={() => navigateToPartsDetail(_id)} class="btn">
    //     Buy Now
    //   </button>
    // </div>
    <div>
      <figure>
        <img src={img} alt="Album" />
      </figure>
      <div class="card-body">
        <h2 className="text-2xl">{name}</h2>
        <p>{description}</p>
        <p>Minimum Qunatity:{minOrder}</p>
        <p>Available Qunatity:{availableQuantity}</p>
        <p>Price:{price}</p>
        <div class="card-actions justify-start">
          <button onClick={() => navigateToPartsDetail(_id)} class="btn">
            Buy Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default Purchase;
