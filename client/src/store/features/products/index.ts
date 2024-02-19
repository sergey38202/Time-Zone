import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { axiosPublic } from '../../../api/axios';
import { SLICE_NAME } from './constants';
import { IProductsState } from './types';
import { IProductDTO } from '../../../components/types';

const initialState: IProductsState = {
  products: [],
  status: 'idle',
  error: null,
};

export const fetchProducts = createAsyncThunk('products/fetchProducts', async () => {
  const response = await axiosPublic.get<IProductDTO[]>('product/products');
  return response.data;
});

export const addProduct = createAsyncThunk(
    'products/addProduct',
    async (newProduct: any) => {
      const response = await axiosPublic.post<any>('product/create', newProduct);
      return response.data;
    }
);

const productSlice = createSlice({
  name: SLICE_NAME,
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.products = action.payload;
      })
      .addCase(fetchProducts.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      })
      .addCase(addProduct.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.products = action.payload;
      })
      .addCase(addProduct.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});

export const productsActions = productSlice.actions;
export default productSlice.reducer;