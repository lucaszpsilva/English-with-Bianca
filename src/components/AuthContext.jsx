/* eslint-disable react-refresh/only-export-components */
import { createContext, useContext, useState } from "react";

const AuthContext = createContext({});

export function AuthProvider({ children }) {
  // Esse estado guarda se a pessoa passou pelo login NESTA sessão
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const login = (senhaDigitada) => {
    const SENHA_CORRETA = "student123";
    if (senhaDigitada === SENHA_CORRETA) {
      setIsAuthenticated(true);
      return true;
    }
    return false;
  };

  const logout = () => {
    setIsAuthenticated(false);
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(AuthContext);
}
