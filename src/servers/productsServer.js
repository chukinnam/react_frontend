export const getAllproducts = async () => {
  try {
    const response = await fetch("/api/products/all", {
      method: "get",
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
