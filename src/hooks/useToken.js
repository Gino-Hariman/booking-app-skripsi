import React, { useState } from "react";

const useToken = () => {
  const getToken = () => {
    const tokenString = localStorage.getItem("login_token");
    const userToken = JSON.parse(tokenString);
    return userToken;
  };

  const [token, setToken] = useState(getToken());

  const saveToken = (loginToken) => {
    localStorage.setItem("token", JSON.stringify(loginToken));
    setToken(loginToken);
  };

  return {
    setToken: saveToken,
    token,
  };
};

export default useToken;
