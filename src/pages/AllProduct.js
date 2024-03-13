import React, { useEffect, useState } from "react";
import { getAllproducts } from "../servers/productsServer";
import ProductList from "../components/ProductList";
import FilterComponentr from "../components/FilterComponentr";

const AllProduct = () => {
  const [products, setProducts] = useState([]);

  const getproduct = async () => {
    const result = await getAllproducts(1);
    setProducts(result.data);
  };
  useEffect(() => {
    getproduct();
  }, []);

  return (
    <>
      <FilterComponentr setProducts={setProducts} products={products} />
      <ProductList products={products} />
    </>
  );
};

export default AllProduct;
