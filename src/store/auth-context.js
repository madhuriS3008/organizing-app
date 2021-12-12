import React from "react";

export const AuthContext = React.createContext({
  login: null,
  onLogin: () => {},
  onLogout: () => {},
});
