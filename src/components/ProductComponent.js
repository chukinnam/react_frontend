import React from "react";

const ProductComponent = (prop) => {
  return (
    <>
      <div className="product-container">
        <div className="product-box">
          <div>
            {console.log(process.env.PUBLIC_URL)}
            <img
              className="product-img"
              src={`/photo/${prop.catalogy}/clothing/${prop.image}.jpeg`}
              alt={prop.name}
            />
          </div>
          <div>
            <span>{prop.catalogy}</span>
          </div>
          <div>
            <h2>
              <span className="product-name">{prop.name}</span>
            </h2>
          </div>
          <div>
            <span className="product-price">{prop.price}</span>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductComponent;
