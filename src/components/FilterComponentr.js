import React, { useEffect, useState } from "react";
import { getProduictByFilter } from "../servers/productsServer";
function FilterComponentr({ setProducts, products }) {
  const [filterValue, setFilterValue] = useState({
    man: false,
    women: false,
    minprice: 0,
    maxprice: 0,
    filterprice: 0,
    page: 1,
    limit: 6,
  });

  const formsubmit = async (event) => {
    event.preventDefault();

    const result = await getProduictByFilter(filterValue);
    setProducts(result.data);
  };
  useEffect(() => {
    // 未做好個filter maxprice 應該唔會update sql backend 要 return query 後的max price
    if (products.length > 0) {
      setFilterValue({
        ...filterValue,
        maxPrice: products.reduce((a, b) => (a.price > b.price ? a : b)).price,
        minPrice: products.reduce((a, b) => (a.price < b.price ? a : b)).price,
        filterprice: products.reduce((a, b) => (a.price > b.price ? a : b))
          .price,
      });
    }
    if (
      (filterValue.man && filterValue.women) ||
      (!filterValue.man && !filterValue.women)
    ) {
      setFilterValue((element) => {
        return { ...element, c: "man,women" };
      });
    } else if (filterValue.man) {
      setFilterValue((element) => {
        return { ...element, c: "man" };
      });
    } else if (filterValue.women) {
      setFilterValue((element) => {
        return { ...element, c: "women" };
      });
    }
  }, [products, filterValue.man, filterValue.women]);

  return (
    <>
      <div>
        <form onSubmit={formsubmit}>
          <h2>Catalogy</h2>
          <input
            type="checkbox"
            id="man"
            name="man"
            value="man"
            onChange={() => {
              setFilterValue({
                ...filterValue,
                man: !filterValue.man,
              });
            }}
          />
          <label htmlFor="man">man</label>
          <input
            type="checkbox"
            id="women"
            name="women"
            value="women"
            onChange={() => {
              setFilterValue({
                ...filterValue,
                women: !filterValue.women,
              });
            }}
          />
          <label htmlFor="women">women</label>
          <input
            type="range"
            id="price"
            name="price"
            min={filterValue.minPrice}
            max={filterValue.maxPrice}
            onChange={(e) => {
              setFilterValue({ ...filterValue, filterprice: e.target.value });
            }}
          />
          <label htmlFor="price">
            min price:${filterValue.minPrice} - max price: $
            {filterValue.filterprice}
          </label>

          <input type="submit" value="Filter" />
        </form>
      </div>
    </>
  );
}

export default FilterComponentr;
