import React, { FunctionComponent } from "react";
import { Navbar } from "../../components";
import { Product } from "../home/products";

interface BasketProps {
  basketItems: Product[];
}

const Basket: FunctionComponent<BasketProps> = ({ basketItems }) => {
  const getTotalPrice = () => {
    return basketItems.reduce((total, item) => total + item.price, 0);
  };

  return (
    <>
      <Navbar />
      <div className="basket">
        <h2>Your Basket</h2>
        <ul>
          {basketItems.length === 0 ? (
            <li>Your basket is 0</li>
          ) : (
            basketItems.map((item) => (
              <li key={item.id}>
                {item.name} - Price: {item.price}
              </li>
            ))
          )}
        </ul>
        <p>Total Price: {getTotalPrice()} USD</p>
      </div>
    </>
  );
};

export default Basket;
