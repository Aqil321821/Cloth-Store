import './shop.styles.scss';
import { useContext } from 'react';
import { ProductsContext } from '../../context/ProductsContext';
import ProductCard from '../../components/Product-card/Product-card.compt';
export const Shop = () => {
  const { products } = useContext(ProductsContext);
  return (
    <div className='products-container'> 
      {products.map((product) => {
        return <ProductCard product={product} key={product.id} />;
      })}
    </div>
  );
};
