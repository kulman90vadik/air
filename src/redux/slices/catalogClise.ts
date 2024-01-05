// 3 ШАГ
import axios from 'axios';
import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import {ObjectItem} from '../../models';
import { getCartLS } from '../../utils/getCartLS';
// import { getCartLS } from '../../utils/getCartLS';
// import { getCartLSCatalog } from '../../utils/getCartLS';
// import { getCartLS } from '../../utils/getCartLS';

type FetchParams = { categoryId: string, page: string, orderId: string }
// ODER
// type FetchParams = Record <string, string>;

export const fetchCatalog = createAsyncThunk<ObjectItem[], Record<string, string>>('catalog/fetchCatalogStatus', async (params) => {
  const { categoryId, page, orderId } = params;
  const { data } = await axios.get<ObjectItem[]>('https://fakestoreapi.com/products');
    return data as ObjectItem[];
  }
)


export enum Status {
  LOADING = 'loading',
  SUCCESS = 'success',
  ERROR = 'error',
}


interface CatalogState {
  catalog: ObjectItem[];
  // status: 'loading' | 'success' | 'error';
  status: Status;
}

const initialState: CatalogState = {
  status: Status.LOADING,
  catalog: []
};


export const catalogSlice = createSlice({
  name: "catalog",
  initialState,

  reducers: {
    btnChange: (state, obj: PayloadAction<ObjectItem>) => {
      state.catalog = state.catalog.map((el) =>
        Number(el.id) !== Number(obj.payload.id)
          ? el
          : { ...el, btn: !el.btn }
      );
    },
    addNewProduct: (state, newObj: PayloadAction<ObjectItem>) => {
      state.catalog = [{ ...newObj.payload }, ...state.catalog];
    }

  },

  extraReducers: (builder) => {
    builder.addCase(fetchCatalog.pending, (state, action) => {
      state.status = Status.LOADING;
      state.catalog = [];
    });
    builder.addCase(fetchCatalog.fulfilled, (state, action) => {


      let catalogLG: ObjectItem[] = getCartLS();
      for (let i = 0; i < action.payload.length; i++) {
        const newItemIndex: number = catalogLG.findIndex(item => item.id === action.payload[i].id)
        
        if (newItemIndex >= 0) {     
          state.catalog[i] = catalogLG[newItemIndex]
        }
        else {
          state.catalog[i] = action.payload[i]
        }
      }
      // state.catalog = action.payload;
      state.status = Status.SUCCESS;
    });
    builder.addCase(fetchCatalog.rejected, (state, action) => {
      state.status = Status.ERROR;
      state.catalog = []
    });
  }

});

export const {btnChange, addNewProduct} = catalogSlice.actions;

export default catalogSlice.reducer;
