import { createContext, useContext } from "react";

export const authContex = createContext();

export const useAuth = () => {
  const contex = useContext(authContex);
  return contex;
};

export function AuthProvider({ children }) {
  const user = {
    login: true,
  };

  return <authContex.Provider value={{ user }}>{children}</authContex.Provider>;
}
