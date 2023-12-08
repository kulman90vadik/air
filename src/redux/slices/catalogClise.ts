// 3 ШАГ
import axios from 'axios';
import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import {CatalogItem} from '../../models';
type FetchParams = { categoryId: string, page: string, orderId: string }
// ODER
// type FetchParams = Record <string, string>;

export const fetchCatalog = createAsyncThunk<CatalogItem[], Record<string, string>>('catalog/fetchCatalogStatus', async (params) => {
  const { categoryId, page, orderId } = params;
  const { data } = await axios.get<CatalogItem[]>('https://fakestoreapi.com/products');
    return data as CatalogItem[];
  }
)


export enum Status {
  LOADING = 'loading',
  SUCCESS = 'success',
  ERROR = 'error',
}


interface CatalogState {
  catalog: CatalogItem[];
  // status: 'loading' | 'success' | 'error';
  status: Status;
}

const initialState: CatalogState = {
  catalog: [],
  status: Status.LOADING
};


export const catalogSlice = createSlice({
  name: "catalog",
  initialState,

  reducers: {
    // categoryChange: (state, index: PayloadAction<number>) => {
    //   state.countCategory = index.payload;
    // },
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

export const {} = catalogSlice.actions;

export default catalogSlice.reducer;
