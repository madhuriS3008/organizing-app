import React, { useState } from "react";

const AuthContext = React.createContext({
  login: null,
  onLogin: () => {},
  onLogout: () => {},
});

export const AuthProvider = (props) => {
  const [login, setLogin] = useState(false);

  const loginHandler = () => {
    setLogin(true);
  };

  const logoutHandler = () => {
    setLogin(false);
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
