import './product-card.styles.scss';

import Button from '../button/button.compt';

const ProductCard = ({ product }) => {
  const { name, price, imageUrl } = product;
  return (
    <div className='product-card-container'>
      <img src={`${imageUrl}`} alt={`${name}`} />
      <div className='footer'>
        <span className='name'>{name}</span>
        <spna className='price'>{price}</spna>
      </div>
      <Button buttonType='inverted'>Add to Cart</Button>
    </div>
  );
};

export default ProductCard;
