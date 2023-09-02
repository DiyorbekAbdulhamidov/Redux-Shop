import { createSlice } from '@reduxjs/toolkit';
import { Product } from '../types/type';

const basketSlice = createSlice({
  name: 'basket',
  initialState: [] as Product[],
  reducers: {
    addToBasket: (state, action) => {
      state.push(action.payload);
    },
    removeFromBasket: (state, action) => {
      const productId = action.payload;
      return state.filter(item => item.id !== productId);
    },
  },
});

export const { addToBasket, removeFromBasket } = basketSlice.actions;
export default basketSlice.reducer;
// 