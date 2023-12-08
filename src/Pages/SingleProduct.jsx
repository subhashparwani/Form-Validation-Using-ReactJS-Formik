import axios from "axios";
import React, { useEffect } from "react";
import { useParams } from "react-router-dom";

function SingleProduct() {
  let { id } = useParams();
  useEffect(() => {
    axios
      .get(`https://dummyjson.com/products/${id}`)
      .then((data) => console.log(data));
  });
  return (
    <>
      <h2>single product - {id}</h2>
    </>
  );
}

export default SingleProduct;
