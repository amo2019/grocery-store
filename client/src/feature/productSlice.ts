import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { getProducts, updateProduct, deleteProduct, createProduct } from "../lib/api";
import type { Product } from "../product";

export interface ProductState {
  item: Product[];
}

const initialState: ProductState = {
  item: [],
};

export const ProductSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    InjectProducts: (state, action: PayloadAction<Product[]>) => {
      action.payload.forEach((item)=>{
        state.item.push(item);
      })
    },
    AddProduct: (state, action: PayloadAction<Product>) => {
      state.item.push(action.payload);
      createProduct(action.payload)
    },
    UpdateProduct: (state, action: PayloadAction<Product>) => {
      state.item.forEach( (item, index) => {
        if(item.id === action.payload.id){ 
          state.item[index] = {...item, ...action.payload};
          updateProduct(action.payload)
        }
      })
    },
    DeleteProduct: (state, action: PayloadAction<Product>) => {
      state.item.forEach( (item, index) => {
        if(item.id === action.payload.id) {
          state.item.splice(index,1);
          deleteProduct(action.payload)
        }
      })
    },
  },
});

export const { AddProduct, DeleteProduct, UpdateProduct, InjectProducts } = ProductSlice.actions;

export default ProductSlice.reducer;
