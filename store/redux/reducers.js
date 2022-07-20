import { createSlice } from "@reduxjs/toolkit";

const favoriteSlice = createSlice({
  name: "favoriteSlice",
  initialState: {
    ids: [],
  },
  reducers: {
    addItem: (state, action) => {
      state.ids.push(action.payload.id);
    },
    removeItem: (state, action) => {
      state.ids.splice(state.ids.indexOf(action.payload.id), 1);
    },
  },
});

export const { addItem, removeItem } = favoriteSlice.actions;
export default favoriteSlice.reducer;
