import axios from "axios";
import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import { toast } from "react-toastify";
import auth from "../../firebase.init";
import Loading from "../Sheared/Loading";

const PartsDetail = () => {
  const [user] = useAuthState(auth);
  const [orderQuantity, setOrderQuantity] = useState(0);
  const [quantityError, setQuantityError] = useState("");
  const [buttonDisabled, setButtonDisabled] = useState(false);

  const { id } = useParams();

  const {
    data: product,
    isLoading,
    refetch,
  } = useQuery(("parts", id), () =>
    axios.get(`http://localhost:5000/parts/${id}`)
  );
  const products = product?.data;
  useEffect(() => {
    const orderQantityMinimumParseInt = parseInt(product?.data.minOrder);
    setOrderQuantity(orderQantityMinimumParseInt);
  }, [product]);
  if (isLoading) {
    return <Loading></Loading>;
  }

  const handleNewQuantity = (e) => {
    const newQuantity = parseInt(e.target.value);

    setOrderQuantity(newQuantity);
    if (newQuantity < parseInt(product?.data.minOrder)) {
      setQuantityError("you Can not add less than Minimum Order Quantity");
      setButtonDisabled(true);
    } else if (newQuantity > parseInt(product?.data.available)) {
      setQuantityError("you Can not add higher thanavailableQuantity Quantity");
      setButtonDisabled(true);
    } else {
      setQuantityError("");
      setButtonDisabled(false);
    }
  };
  const hanldeSubmit = (e) => {
    e.preventDefault();
    const price = orderQuantity * parseInt(product.data.price);

    const order = {
      email: e.target.email.value,
      phone: e.target.phone.value,
      quantity: orderQuantity,
      address: e.target.address.value,
      img: product.data.img,
      price: price,
      name: product.data.name,
    };
    axios.post("http://localhost:5000/order", order).then((response) => {
      console.log(response.data);
    });
    let newAvailableQuantity =
      parseInt(product?.data.availableQuantity) - orderQuantity;
    const doc = {
      availableQuantity: newAvailableQuantity,
    };

    axios.put(`http://localhost:5000/parts/${id}`, doc).then((response) => {
      refetch();
    });
    toast.success(`Order Successful`);
  };
  // console.log(product);
  return (
    <div className="container sm:container my-20">
      <div>
        <div className="text-center  mb-4">
          <h1>Your Name: {user?.displayName}</h1>
          <h1>Your Email: {user?.email}</h1>
        </div>
        <div className="">
          <div className="card lg:card-side bg-base-100 shadow-xl">
            <figure>
              <img className="w-full" src={products?.img} alt="" />
            </figure>
            <div className="card-body">
              <h2 className="card-title">{products?.name}</h2>
              <p>{products?.des}</p>
              <p>Minimum Order Quantity: {products?.minOrder}</p>
              <p>Available: {products?.availableQuantity}</p>
              <p>Price: {products?.price}</p>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div className="grid grid-cols-1 justify-center ">
          <div className="card w-full mt-20 bg-base-100 shadow-xl">
            <div className="card-body">
              <h2 className="text-4xl text-center">Order info</h2>

              <form onSubmit={hanldeSubmit}>
                <label htmlFor="email">Email</label>
                <input
                  name="email"
                  type="email"
                  placeholder="email"
                  disabled
                  value={user?.email}
                  className="input input-bordered input-xs w-full "
                />
                <label htmlFor="phone">Phone</label>
                <input
                  type="text"
                  name="phone"
                  placeholder="Phone Number"
                  className="input input-bordered input-sm w-full "
                />
                <label htmlFor="quantity">Order Quantity</label>
                {quantityError && (
                  <small className="text-red-500">{quantityError}</small>
                )}
                <input
                  required
                  onChange={handleNewQuantity}
                  name="orederQuantity"
                  value={orderQuantity}
                  type="number"
                  className="input input-bordered input-md w-full "
                />
                <label htmlFor="address">Address</label>
                <input
                  name="address"
                  type="text"
                  placeholder="Address"
                  className="input input-bordered input-lg w-full"
                />
                <div className="card-actions justify-end">
                  <button
                    disabled={buttonDisabled}
                    type="submit"
                    className="btn btn-primary"
                  >
                    Order
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PartsDetail;
// import React, { useEffect, useState } from "react";
// import { useParams } from "react-router-dom";

// const PartsDetail = () => {
//   const { partId } = useParams();
//   const [part, setPart] = useState({});

//   useEffect(() => {
//     const url = `http://localhost:5000/part/${partId}`;
//     console.log(url);
//     fetch(url)
//       .then((res) => res.json())
//       .then((data) => setPart(data));
//   }, []);
//   return (
//     <div className="flex h-screen justify-center items-center">
//       <div class="card lg:card-side bg-base-100 shadow-xl">
//         <figure>
//           <img src={part.img} alt="Album" />
//         </figure>
//         <div class="card-body">
//           <h2 class="card-title">{part.name}</h2>
//           <p>{part.description}</p>
//           <h1>
//             Quantity:
//             <input
//               type="text"
//               placeholder={part.availableQuantity}
//               class="input  max-w-xs"
//             />
//           </h1>
//           <input
//             type="text"
//             placeholder="Type here"
//             class="input input-bordered w-full max-w-xs"
//           />
//           <input
//             type="text"
//             placeholder="Type here"
//             class="input input-bordered w-full max-w-xs"
//           />
//           <input
//             type="text"
//             placeholder="Your Address"
//             class="input input-bordered w-full max-w-xs"
//           />
//           <input
//             type="Number"
//             placeholder="Your PhoneNumber"
//             class="input input-bordered w-full max-w-xs"
//           />
//           <div class="card-actions justify-end">
//             <button class="btn btn-primary">Listen</button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default PartsDetail;
