import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  manufacturerOptions: "ALL",
  cryptoCurrencyOption: "ALL",
  productCategory: "ALL",
  keyWord: "",
  sortby: "Newest",
};

const userProductSearch = createSlice({
  name: "userProductSearch",
  initialState,
  reducers: {
    setKeyWord: (state, { payload }) => {
      state.keyWord = payload;
    },
    setManufacturerOptions: (state, { payload }) => {
      state.manufacturerOptions = payload;
    },
    setCryptoCurrencyOption: (state, { payload }) => {
      state.cryptoCurrencyOption = payload;
    },
    setProductCategory: (state, { payload }) => {
      state.productCategory = payload;
    },
    setSortBy: (state, { payload }) => {
      state.sortby = payload;
    },
    resetAll: (state) => {
      state.keyWord = "";
      state.manufacturerOptions = "ALL";
      state.cryptoCurrencyOption = "ALL";
      state.sortby = "Newest";
      state.productCategory = "ALL";
    },
  },
});

export default userProductSearch.reducer;
export const {
  setCryptoCurrencyOption,
  setKeyWord,
  setManufacturerOptions,
  setSortBy,
  resetAll,
  setProductCategory,
} = userProductSearch.actions;
