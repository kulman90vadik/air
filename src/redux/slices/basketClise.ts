import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ObjectItem } from "../../models";

interface BasketState {
  basket: ObjectItem[];
  // status: Status;
}

const initialState: BasketState = {
  basket: [],
  // status: Status.LOADING
};

export const basketSlice = createSlice({
  name: "catalog",
  initialState,

  reducers: {

    addToBasket: (state, obj: PayloadAction<ObjectItem>) => {
      if (state.basket.find((item) => item.id === obj.payload.id)) {
        state.basket = state.basket.filter((elem) => {
          return elem.id !== obj.payload.id;
        });
      } else {
        state.basket = [...state.basket, { ...obj.payload }];
      }
    },


  },
});

export const { addToBasket } = basketSlice.actions;

export default basketSlice.reducer;
