// create auth function communicate with server and return user data
const login = async (userData) => {
  try {
    const response = await fetch("/api/user/login", {
      method: "POST",
      mode: "cors",
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userData),
    });
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error.json());
  }
};
//create a new user and return a success message
const register = async (userData) => {
  try {
    const response = await fetch("/api/user/register", {
      method: "POST",
      mode: "cors",
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userData),
    });

    const data = await response.json();
    return data;
  } catch (error) {
    console.log("error:", error);
  }
};
const authServer = {
  login,
  register,
};

export default authServer;
