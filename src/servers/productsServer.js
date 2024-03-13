export const getAllproducts = async (page) => {
  try {
    const response = await fetch(`/api/products/all?page=${page}`, {
      method: "GET",
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
  }
};
export const getProductById = async (id) => {
  try {
    const response = await fetch(`/api/products/id?id=${id}`, {
      method: "GET",
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await response.json();

    return data;
  } catch (error) {
    console.log(error);
  }
};
export const getProduictByFilter = async (filter) => {
  let filters = "";
  try {
    if (filter.hasOwnProperty("c")) {
      filters += `&c=${filter.c}`;
    }
    if (filter.hasOwnProperty("order_by")) {
      filters += `&order_by=${filter.order_by}`;
    }
    if (filter.hasOwnProperty("page")) {
      filters += `&page=${filter.page}`;
    }
    if (filter.hasOwnProperty("limit")) {
      filters += `&limit=${filter.limit}`;
    }
    if (
      filter.hasOwnProperty("minprice") &&
      filter.hasOwnProperty("filterprice")
    ) {
      filters += `&maxprice=${filter.filterprice}&minprice=${filter.minprice}`;
    }

    const response = await fetch(`/api/products/filter?${filters}`, {
      method: "GET",
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await response.json();

    return data;
  } catch (error) {
    console.log(error);
  }
};
