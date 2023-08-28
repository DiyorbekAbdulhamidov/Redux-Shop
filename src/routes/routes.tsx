import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import { Basket, Home } from '../pages';

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/basket" element={<Basket />} />
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
};

export default AppRoutes;