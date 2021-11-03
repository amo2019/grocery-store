import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface ButtonToggle {
  save: boolean,
  edit: boolean
}

export interface ButtonState {
  toggle: ButtonToggle;
}


const initialState: ButtonState = {
  toggle: {save: true, edit: true},
};

export const ButtonSlice = createSlice({
  name: "button",
  initialState,
  reducers: {
    toggleSaveButton: (state, action: PayloadAction<boolean>) => {
      state.toggle["save"]=(action.payload);
      state.toggle["edit"]=(!action.payload);
    },
    toggleEditButton: (state, action: PayloadAction<boolean>) => {
      state.toggle["edit"]=(action.payload);
      state.toggle["save"]=(!action.payload);
    },
  },
});

export const { toggleSaveButton, toggleEditButton } = ButtonSlice.actions;

export default ButtonSlice.reducer;
