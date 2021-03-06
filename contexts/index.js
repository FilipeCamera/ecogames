import {createContext, useState} from 'react';


const AppGames = createContext(null);

export function Provider({children}){
  const [product, handleProduct] = useState([{name: 'teste', price: 'teste'}]);
  
  return(
    <AppGames.Provider value={product, handleProduct}>
      {children}
    </AppGames.Provider>
  )
}

export default AppGames;