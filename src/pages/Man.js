import React, { useState, useEffect } from "react";

import { getProduictByFilter } from "../servers/productsServer";
import ProductList from "../components/ProductList";
const Man = () => {
  const [products, setProducts] = useState([]);

  const getManAllProduct = async (filter) => {
    const result = await getProduictByFilter(filter);

    setProducts(result.data);
  };

  useEffect(() => {
    getManAllProduct({ c: "man", page: 1 });
  }, []);

  return (
    <>
      <ProductList products={products} />
    </>
  );
};

export default Man;
