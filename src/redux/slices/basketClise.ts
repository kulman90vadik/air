import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ObjectItem } from "../../models";
import { getCartLS } from "../../utils/getCartLS";

interface BasketState {
  basket: ObjectItem[];
  count: number
  // status: Status;
}

const initialState: BasketState = {
  basket: getCartLS(),
  count: 0
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
        state.count = state.count - 1;
      } else {
        state.count = state.count + 1;
        state.basket = [...state.basket, { ...obj.payload }];
      }
    },

    delCartBasket: (state, obj:PayloadAction<ObjectItem>) => {
      state.basket = state.basket.filter((elem) => elem.id !== obj.payload.id);
      state.count = state.count - 1;
    }


  },
});

export const { addToBasket, delCartBasket } = basketSlice.actions;

export default basketSlice.reducer;
