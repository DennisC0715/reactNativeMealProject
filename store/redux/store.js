import { configureStore } from "@reduxjs/toolkit";
import favoritesReducer from "./reducers";

export const store = configureStore({
  reducer: {
    favoritesMeals: favoritesReducer,
  },
});
