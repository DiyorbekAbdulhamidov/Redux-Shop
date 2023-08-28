import React, { useState } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import { Basket, Home } from '../pages';
import { Product } from '../pages/home/products';

const AppRoutes = () => {
  const [basketItems] = useState<Product[]>([]);

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/basket" element={<Basket basketItems={basketItems} />} />
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
};

export default AppRoutes;