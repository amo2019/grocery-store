import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import type { Product } from "../product";
import products from "../products.json"

export interface ProductState {
  item: Product[];
}


const initialState: ProductState = {
  item: products,
};

export const ProductSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    AddProduct: (state, action: PayloadAction<Product>) => {
      state.item.push(action.payload);
    },
    UpdateProduct: (state, action: PayloadAction<Product>) => {
      state.item.forEach( (item, index) => {
        if(item.id === action.payload.id) state.item[index] = {...item, ...action.payload};
      })
    },
    DeleteProduct: (state, action: PayloadAction<Product>) => {
      state.item.forEach( (item, index) => {
        if(item.id === action.payload.id) state.item.splice(index,1);
      })
    },
  },
});

export const { AddProduct, DeleteProduct, UpdateProduct } = ProductSlice.actions;

export default ProductSlice.reducer;
