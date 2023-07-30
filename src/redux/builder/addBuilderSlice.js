const { createSlice } = require("@reduxjs/toolkit");

const initialState = {
  addedProduct: {},
};

const addedProductSlice = createSlice({
  name: "addedProduct",
  initialState,
  reducers: {},
});
export default addedProductSlice.reducer;
