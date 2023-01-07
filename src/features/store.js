import { configureStore } from "@reduxjs/toolkit";
import bookmarkSlice from "./bookmarkSlice";
import randomSlice from "./random/randomSlice";
import tagsSlice from "./tagsSlice";

const store = configureStore({
  reducer: {
    random: randomSlice,
    tags: tagsSlice,
    bookmark:bookmarkSlice
  },
});

export default store;
