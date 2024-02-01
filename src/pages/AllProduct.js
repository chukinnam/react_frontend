import React, { useEffect, useState } from "react";
import { getAllproducts } from "../servers/productsServer";
import ProductComponent from "../components/ProductComponent";

const AllProduct = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    const getproduct = async () => {
      const result = await getAllproducts();
      setProducts(result.data);
    };
    getproduct();
  }, []);

  return (
    <>
      <ol>
        {products.map((element) => (
          <li key={element.id}>
            <ProductComponent
              catalogy={element.category}
              image={element.image}
              name={element.name}
              price={element.price}
            />
          </li>
        ))}
      </ol>
    </>
  );
};

export default AllProduct;
