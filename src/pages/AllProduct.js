import React, { useEffect, useState } from "react";
import { getAllproducts } from "../servers/productsServer";
import ProductList from "../components/ProductList";
import FilterComponentr from "../components/FilterComponentr";

const AllProduct = () => {
  const [products, setProducts] = useState({
    product: [],
    maxprice: "",
    minprice: "",
  });

  const getproduct = async () => {
    const result = await getAllproducts(1);

    setProducts({
      ...products,
      product: result.products,
      maxprice: result.maxprice,
      minprice: result.minprice,
    });
  };
  useEffect(() => {
    getproduct();
  }, []);

  return (
    <>
      <FilterComponentr
        setProducts={setProducts}
        products={products.product}
        catalogy="all"
        minprice={products.minprice}
        maxprice={products.maxprice}
      />

      <ProductList products={products.product} />
    </>
  );
};

export default AllProduct;
