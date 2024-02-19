import { combineReducers } from '@reduxjs/toolkit';

import userReducer from "./features/user";
import productsReducer from "./features/products";
import cartReducer from "./features/cart";

const rootReducer = combineReducers({
  user: userReducer,
  products: productsReducer,
  cart: cartReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
