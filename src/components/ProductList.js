import React from "react";
import ProductComponent from "../components/ProductComponent";
function ProductList(props) {
  return (
    <ol className="product_list">
      {props.products.map((element) => (
        <li className="product" key={element.id}>
          <ProductComponent
            catalogy={element.category}
            image={element.image}
            name={element.name}
            price={element.price}
            id={element.id}
          />
        </li>
      ))}
    </ol>
  );
}

export default ProductList;
