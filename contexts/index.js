import { createContext, useState } from "react";

const AppGamesContext = createContext();

export const Provider = ({ children }) => {
  const [product, handleProduct] = useState([]);
  const [prodQuant, handleProdQuant] = useState(0);
  const [frete, handleFrete] = useState(0);
  return (
    <AppGamesContext.Provider
      value={{
        product,
        handleProduct,
        prodQuant,
        handleProdQuant,
        frete,
        handleFrete,
      }}
    >
      {children}
    </AppGamesContext.Provider>
  );
};

export default AppGamesContext;
