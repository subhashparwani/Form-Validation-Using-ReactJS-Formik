import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

function Products() {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    axios
      .get("https://dummyjson.com/products")
      .then((res) => setProducts(res.data.products));
  }, []);
  return (
    <>
      <div className="bg-white">
        <div className="text-center ">
          <h1 className="font-semibold mt-10 text-4xl">Products</h1>
          <p className="px-24 mt-4 text-gray-700">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi
            accusamus cum quod perferendis quibusdam sequi nemo, iste commodi
            aspernatur enim facilis, delectus debitis, id molestiae. Animi est
            explicabo eligendi debitis!
          </p>
        </div>
        <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
          <h2 className="sr-only">Products</h2>

          <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
            {products.map((product) => (
              <Link
                key={product.id}
                to={`product/${product.id}`}
                className="group"
              >
                <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-h-8 xl:aspect-w-7">
                  <img
                    src={product.thumbnail}
                    alt={product.title}
                    className="object-contain h-48 w-96 object-center group-hover:opacity-75"
                  />
                </div>
                <h3 className="mt-4 text-sm text-gray-700">{product.title}</h3>
                <p className="mt-1 text-lg font-medium text-gray-900">
                  {product.price}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default Products;
