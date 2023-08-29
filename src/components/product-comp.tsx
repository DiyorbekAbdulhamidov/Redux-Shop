import React from 'react';
import { useDispatch } from 'react-redux';
import { addToBasket } from '../redux/basket-slice';
import { Product } from '../types/type';

interface ProducCompProps {
  product: Product;
}

const ProducComp: React.FC<ProducCompProps> = ({ product }) => {
  const dispatch = useDispatch();

  const handleAddToBasket = () => {
    dispatch(addToBasket(product));
    
  };

  return (
    <div className="card" style={{ width: '18rem', borderRadius: 20 }}>
      <img src={product.image} className="card-img-top" alt="..." />
      
      <div className="card-body">
        <h5 className="card-title">{product.name}</h5>
        <p className="card-text">Price: {product.price}</p>
        <button onClick={handleAddToBasket} type="button" className="btn btn-primary">
          Add to Basket
        </button>
      </div>
    </div>
  );
};

export default ProducComp;
