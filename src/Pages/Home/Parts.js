import React from "react";

const Parts = () => {
  return (
    <div class="carousel carousel-center rounded-box justify-center py-12">
      <div class="carousel-item px-6">
        <img
          src="https://api.lorem.space/image/pizza?w=500&h=300&hash=8B7BCDC2"
          alt="Pizza"
        />
      </div>

      <div class="carousel-item px-6">
        <img
          src="https://api.lorem.space/image/pizza?w=200&h=300&hash=BDC01094"
          alt="Pizza"
        />
      </div>
      <div class="carousel-item px-6">
        <img
          src="https://api.lorem.space/image/pizza?w=200&h=300&hash=7F5AE56A"
          alt="Pizza"
        />
      </div>
    </div>
  );
};

export default Parts;
