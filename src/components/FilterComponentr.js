import React, { useEffect, useState } from "react";
import { getProduictByFilter } from "../servers/productsServer";
function FilterComponentr({
  setProducts,
  products,
  catalogy,
  minprice,
  maxprice,
}) {
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
    console.log(result);
    setProducts({
      ...products,
      product: result.products,
      maxprice: result.maxprice,
      minprice: result.minprice,
      filterprice: result.minprice,
    });
  };
  useEffect(() => {
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

    setFilterValue((element) => {
      return {
        ...element,
        minprice: minprice,
        maxprice: maxprice,
      };
    });
  }, [products, filterValue.man, filterValue.women, minprice, maxprice]);

  return (
    <>
      <div>
        <form onSubmit={formsubmit}>
          <h3>Filter </h3>
          {catalogy === "all" ? (
            <>
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
            </>
          ) : (
            ""
          )}

          <input
            type="range"
            id="price"
            name="price"
            min={filterValue.minprice}
            max={filterValue.maxprice}
            value={filterValue.filterprice}
            onChange={(e) => {
              setFilterValue({ ...filterValue, filterprice: e.target.value });
            }}
          />
          <label htmlFor="price">
            min price:${filterValue.minprice} - max price: $
            {filterValue.maxprice}
          </label>

          <input type="submit" value="Filter" />
          {filterValue.filterprice}
        </form>
      </div>
    </>
  );
}

export default FilterComponentr;
