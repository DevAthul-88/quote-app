import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const getQuotes = createAsyncThunk("quotes/random", async (tag) => {
  if (tag == null) {
    const response = await axios.get(`${import.meta.env.VITE_BASE_URL}/random`);
    return response?.data;
  } else {
    const response = await axios.get(
      `${import.meta.env.VITE_BASE_URL}/random?tags=${tag}`
    );
    return response?.data;
  }
});

const randomSlice = createSlice({
  name: "random",
  initialState: { quote: null, error: null, status: "idle" },
  extraReducers(builder) {
    builder
      .addCase(getQuotes.pending, (state, action) => {
        state.status = "loading";
      })
      .addCase(getQuotes.fulfilled, (state, action) => {
        state.quote = action.payload;
        state.status = "idle";
      })
      .addCase(getQuotes.rejected, (state, action) => {
        state.status = "idle";
        state.error = action.error.message;
      });
  },
});

export const selectAllQuotes = (state) => state.random.quote;
export const getQuotesError = (state) => state.random.error;
export const getQuotesStatus = (state) => state.random.status;
export default randomSlice.reducer;
