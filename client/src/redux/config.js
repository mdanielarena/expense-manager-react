//setup config/headers/token
export const tokenConfig = (getState) => {
  //get token from localstorage
  const token = localStorage.getItem("token");
  const config = {
    headers: {
      "Content-type": "application/json",
    },
  };

  if (token) config.headers["x-auth-token"] = token;
  return config;
};
