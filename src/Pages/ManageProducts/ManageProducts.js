import axios from "axios";
import React, { useState } from "react";
import { useQuery } from "react-query";
import DeleteModal from "../DeleteModal/DeleteModal";
import Loading from "../Sheared/Loading";

const ManageProducts = () => {
  const [product, setProduct] = useState(null);
  const { data, isLoading, refetch } = useQuery("parts", () =>
    axios.get("http://localhost:5000/parts")
  );
  if (isLoading) {
    return <Loading></Loading>;
  }

  const products = data.data;
  console.log(product);
  return (
    <div className="container">
      <div class="overflow-x-auto">
        <h1 className="text-4xl"> All Product :{products.length} </h1>
        <table class="table table-zebra w-full">
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>Minimun Order</th>
              <th>Available</th>
              <th>Price</th>
              <th className="text-center">Action</th>
            </tr>
          </thead>
          <tbody>
            {products?.length > 0 &&
              products.map((product, index) => (
                <tr key={product._id}>
                  <th>{index + 1}</th>

                  <td>{product.name}</td>
                  <td>{product.minimunOrder}</td>
                  <td>{product.available}</td>
                  <td>{product.price}</td>
                  <td>
                    <label
                      onClick={() => setProduct(product)}
                      for="delete-confirm-modal"
                      className="btn btn-error"
                    >
                      Delete Product
                    </label>
                  </td>
                </tr>
              ))}
            {product && (
              <DeleteModal refetch={refetch} product={product}></DeleteModal>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ManageProducts;
