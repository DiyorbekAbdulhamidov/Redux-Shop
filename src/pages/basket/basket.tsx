import React from 'react';
import { Navbar } from '../../components';
import { useSelector, useDispatch } from 'react-redux';
import { removeFromBasket } from '../../redux/basket-slice';

const Basket: React.FC = () => {
  const basketItems = useSelector((state: any) => state.basket);
  const dispatch = useDispatch();

  const getTotalPrice = () => {
    return basketItems.reduce((total: any, item: any) => total + item.price, 0);
  };

  const handleRemoveFromBasket = (productId: number) => {
    dispatch(removeFromBasket(productId));
  };

  return (
    <>
      <Navbar />
      <div className="basket" style={{ padding: 40 }}>
        <h2 className='display-1' style={{marginBottom: 40}}>Basket</h2>
        <ul>
          {basketItems.length === 0 ? (
            <p className='h2'>Your basket is empty ❌</p>
          ) : (
            basketItems.map((item: any) => (
              <div className="card" style={{ padding: 20 }} key={item.id}>
                <div><p className='h2'>{item.name}</p></div>
                <span style={{color: 'green'}}>Price: {item.price}</span>
                <button style={{ width: 200, marginTop: 20 }} className='btn btn-danger' onClick={() => handleRemoveFromBasket(item.id)}>Remove</button>
              </div>
            ))
          )}
        </ul>
        <p className='display-6'>Total Price: {getTotalPrice()} USD</p>
      </div>
    </>
  );
};

export default Basket;
