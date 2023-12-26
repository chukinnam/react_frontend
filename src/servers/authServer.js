// create auth function and return user data
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
    console.log("serverpage", data);
    return data;
  } catch (error) {
    console.log(error.json());
  }
};

const authServer = {
  login,
};

export default authServer;
