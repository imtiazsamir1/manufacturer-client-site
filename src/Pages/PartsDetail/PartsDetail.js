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
    <div className="flex h-screen justify-center items-center">
      <div class="card lg:card-side bg-base-100 shadow-xl">
        <figure>
          <img src={part.img} alt="Album" />
        </figure>
        <div class="card-body">
          <h2 class="card-title">{part.name}</h2>
          <p>{part.description}</p>
          <h1>
            Quantity:
            <input
              type="text"
              placeholder={part.availableQuantity}
              class="input  max-w-xs"
            />
          </h1>
          <input
            type="text"
            placeholder="Type here"
            class="input input-bordered w-full max-w-xs"
          />
          <input
            type="text"
            placeholder="Type here"
            class="input input-bordered w-full max-w-xs"
          />
          <input
            type="text"
            placeholder="Your Address"
            class="input input-bordered w-full max-w-xs"
          />
          <input
            type="Number"
            placeholder="Your PhoneNumber"
            class="input input-bordered w-full max-w-xs"
          />
          <div class="card-actions justify-end">
            <button class="btn btn-primary">Listen</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PartsDetail;
