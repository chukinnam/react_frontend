export const checkout = async (orders) => {
  let date = new Date();
  const ordernumber =
    date
      .toLocaleDateString("en-GB", {
        year: "numeric",
        month: "2-digit",
        day: "2-digit",
      })
      .split("/")
      .join("") + Math.floor(Math.random() * 90 + 10);
  let checkoutItems = [];
  checkoutItems = orders.map((element) => {
    return {
      member_id: 4,
      product_id: element.id,
      qty: element.qty,
      order_number: ordernumber,
    };
  });
  try {
    const response = await fetch("/api/checkout/checkout", {
      method: "post",
      //   "cors" for cross Domain Name
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(checkoutItems),
    });
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
  }
};
