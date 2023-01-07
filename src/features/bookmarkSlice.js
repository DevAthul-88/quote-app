import { createSlice } from "@reduxjs/toolkit";


const bookmarkSlice = createSlice({
  name: "tags",
  initialState: { items: []  },
  reducers: {
    add: (state, action) => {
      var quote = JSON.parse(localStorage.getItem("quotes") || "[]");
      let item = {
        id:action.payload.id,
        content: action.payload.content,
        tags: action.payload.tags,
        author: action.payload.author,
        authorSlug: action.payload.authorSlug,
      };
      quote.push(item);
      localStorage.setItem("quotes", JSON.stringify(quote));
      alert("Added to bookmark")
    },
    item: (state, action) => {
      var quote = JSON.parse(localStorage.getItem("quotes"));
      state.items = quote;
    },
    remove: (state, action) => {
      console.log(action.payload);
      var quote = JSON.parse(localStorage.getItem("quotes"));
      quote = quote.filter(function(elem) {
        return elem.id !== action.payload.id;
    });
    localStorage.setItem("quotes", JSON.stringify(quote));
    console.log(quote);
    alert("Removed from bookmark")
    window.location.reload();
    }
  },
});

export const { add , item , remove } = bookmarkSlice.actions;
export default bookmarkSlice.reducer;
