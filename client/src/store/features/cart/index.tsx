import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { SLICE_NAME } from "./constants";
import { ICartState, Product } from './types';

const initialState: ICartState = {
  items: [],
};

const cartSlice = createSlice({
  name: SLICE_NAME,
  initialState,
  reducers: {
    addProduct: (state, action: PayloadAction<Product>) => {
      const existingProductIndex = state.items.findIndex((item) => item.id === action.payload.id);

      if (existingProductIndex !== -1) {
        state.items[existingProductIndex].count += 1;
      } else {
        state.items.push({ ...action.payload, count: 1 });
      }
    },
  },
});

export const { addProduct } = cartSlice.actions;
export default cartSlice.reducer;
