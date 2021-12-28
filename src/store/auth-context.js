import React, { useState } from "react";
import { useHistory } from "react-router-dom";

const AuthContext = React.createContext({
  login: null,
  onLogin: () => {},
  onLogout: () => {},
});

export const AuthProvider = (props) => {
  const [login, setLogin] = useState(false);
  const history = useHistory();

  const loginHandler = () => {
    setLogin(true);
    history.push("/home");
  };

  const logoutHandler = () => {
    setLogin(false);
    history.replace("/");
  };

  const authContext = {
    login: login,
    onLogin: loginHandler,
    onLogout: logoutHandler,
  };

  return (
    <AuthContext.Provider value={authContext}>
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
