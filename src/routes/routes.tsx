import React, { useState } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import { Basket, Home } from '../pages';
import { Product } from '../pages/home/products';

const AppRoutes = () => {
  const [basketItems, setBasketItems] = useState<Product[]>([]);

  const handleAddToBasket = (product: Product) => {
    setBasketItems((prevBasket) => [...prevBasket, product]);
  };

  return (
    <Routes>
      <Route path="/" element={<Home handleAddToBasket={handleAddToBasket} />} />
      <Route path="/basket" element={<Basket basketItems={basketItems} />} />
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
};

export default AppRoutes;
