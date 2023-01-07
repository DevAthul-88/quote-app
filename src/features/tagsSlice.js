import { createSlice } from "@reduxjs/toolkit";
import useFetch from "../hooks/useFetch";

const tagsSlice = createSlice({
  name: "tags",
  initialState: { tags: null, error: null , loading:false },
  reducers: {
    getTags: (state, action) => {
      try {
        const { data, loading, error } = useFetch(
          `${import.meta.env.VITE_BASE_URL}/tags`
        );
        state.loading = loading;
        state.error = error;
        state.tags = data;
      } catch (error) {
        state.error = error.message;
      }
    },
  },
});

export const {getTags} = tagsSlice.actions
export default tagsSlice.reducer;