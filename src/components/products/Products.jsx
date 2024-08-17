import React from "react";
import products from "../../data.json";
import ProductItem from "./ProductItem";


const Products = () => {
  
  return (
    <div className="">
      <div className="flex">
        <div className="product-list w-full">
          <h2 className="text-2xl font-bold mb-4">Desserts</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 ">
          {products?.map((product, index) => (
            <ProductItem key={index} product={product} />
          ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;
