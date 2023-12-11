// 3 ШАГ
import axios from 'axios';
import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import {ObjectItem} from '../../models';
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
  // btn: boolean
}

const initialState: CatalogState = {
  catalog: [],
  status: Status.LOADING
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
      console.log(newObj.payload);
    }

  },

  extraReducers: (builder) => {
    builder.addCase(fetchCatalog.pending, (state, action) => {
      state.status = Status.LOADING;
      state.catalog = [];
    });
    builder.addCase(fetchCatalog.fulfilled, (state, action) => {
      state.catalog = action.payload;
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
