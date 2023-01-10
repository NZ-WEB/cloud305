import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

import { RootState } from '../../store/store';
import getProductApi from './api/product.api';
import { IProduct } from './type/product.types';

export interface IProductState {
  data: IProduct;
  error: string;
  loading: boolean;
}

const initialState: IProductState = {
  data: {
    id: 0,
    stock: 0,
    name: '',
  },
  error: '',
  loading: false,
};

export const getProduct = createAsyncThunk('product/1', () => {
  return getProductApi();
});

const productSlice = createSlice({
  name: 'product',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getProduct.pending, (state) => {
        state.loading = true;
      })
      .addCase(getProduct.rejected, (state, { error }) => {
        state.loading = false;
        state.error = error.message ?? '';
      })
      .addCase(getProduct.fulfilled, (state, { payload }) => {
        state.loading = false;
        state.error = '';
        state.data = payload.data.data;
      });
  },
});

export const productSelector = (state: RootState) => state.product.data;

export default productSlice.reducer;
