export const logout = async () => {
  try {
    const response = await fetch("/api/user/logout", {
      method: "get",
      mode: "cors",
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await response.json();
    if (data.success) {
      if (localStorage.getItem("user") !== null) {
        localStorage.removeItem("user");
      }
      if (localStorage.getItem("auth") !== null) {
        localStorage.removeItem("auth");
      }
      window.location.href = "/";
    }
  } catch (error) {
    console.log(error);
  }
};
