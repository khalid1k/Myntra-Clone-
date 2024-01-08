import { configureStore } from "@reduxjs/toolkit";
import itemsSlice from "./itemsSlice";
import fetchStatusSlice from "./fetchingItemsSlice";
import bagSlice from "./bagSlice";

const MyntraStore = configureStore({
  reducer: { items: itemsSlice.reducer, fetchStatus: fetchStatusSlice.reducer ,bag:bagSlice.reducer},
});
export default MyntraStore;
