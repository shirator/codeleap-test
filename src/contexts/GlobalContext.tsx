import { createContext } from "react";
import { ContextProps } from "../interfaces";

export const GlobalContext = createContext({});

const GlobalProvider = ({ children }: ContextProps) => {
  return <GlobalContext.Provider value={{}}>{children}</GlobalContext.Provider>;
};

// Não houve prop drilling, não vi motivos para se criar um contexto
