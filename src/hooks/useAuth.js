import React, { useEffect, useState } from "react";

const authContext = React.createContext();

const useAuth = () => {
  const [authed, setAuthed] = useState(false);
  const [loading, setLoading] = useState(true);

  const laodedStorageData = async () => {
    try {
      const getToken = await localStorage.getItem("login_token");
      if (JSON.parse(getToken)) {
        setAuthed(true);
      }
    } catch (err) {
      setAuthed(false);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    laodedStorageData();
  }, []);

  // const login = (token) => {
  //   Promise.resolve(localStorage.setItem("login_token", token)).then(() =>
  //     setAuthed(true)
  //   );
  // };

  // useEffect(() => {
  //   if (localStorage.getItem("login_token")) return setAuthed(true);
  //   return setAuthed(false);
  // }, []);

  const login = (token) => {
    console.log("testing", token);
    return new Promise((res) => {
      Promise.resolve(
        localStorage.setItem("login_token", JSON.stringify(token))
      ).then(() => setAuthed(true));
      res();
    });
  };
  // const logout = () => {
  //   Promise.resolve(localStorage.removeItem("login_token")).then(() =>
  //     setAuthed(false)
  //   );
  // };
  const logout = () => {
    return new Promise((res) => {
      localStorage.removeItem("login_token");
      setAuthed(false);

      res();
    });
  };
  return {
    authed,
    login,
    logout,
    loading,
  };
};

export const AuthProvider = ({ children }) => {
  const auth = useAuth();

  return <authContext.Provider value={auth}>{children}</authContext.Provider>;
};

const AuthConsumer = () => {
  return React.useContext(authContext);
};
export default AuthConsumer;
