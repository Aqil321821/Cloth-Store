import { createContext, useState, useEffect } from 'react';
import { getAllData } from '../utils/firebase/firebase.utils';

export const ProductsContext = createContext({
  products: [],
});

export const ProductsProvider = ({ children }) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const getDataFromFirestore = async () => {
      const formattedData = await getAllData();
      console.log(formattedData);
    };
    getDataFromFirestore();
  }, []);

  const value = { products };
  return <ProductsContext.Provider value={value}>{children}</ProductsContext.Provider>;
};
