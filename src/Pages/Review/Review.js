import React, { useEffect, useState } from "react";

const Review = () => {
  const [review, setReview] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/review")
      .then((res) => res.json())
      .then((data) => setReview(data));
  }, []);
  return (
    <div className="max-w-7xl mx-auto px-12">
      <h1 className="max-w-7xl mx-auto px-12 text-4xl py-12 ">User Comments</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {review.map((review) => (
          <div key={review._id} review={review}>
            <div class="card w-96 bg-base-100 shadow-xl ">
              <div class="card-body">
                <h2 class="">Name : {review.name}</h2>
                <p>{review.comment}</p>
                <p>Rattings:{review.rating}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Review;
