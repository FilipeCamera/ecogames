import {createContext, useState} from 'react';

const GamesProd = {
  product: [],
  handleProduct: () => {}
}

const AppGames = createContext(GamesProd);

export default function Provider({children}){
  const [product, setProduct] = useState([]);

  function handleProduct({data}){
    setProduct(data)
  }
  return(
    <AppGames.Provider value={product, handleProduct}>
      {children}
    </AppGames.Provider>
  )
}