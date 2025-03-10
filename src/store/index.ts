import { configureStore } from "@reduxjs/toolkit";
import featuredMeals from "./slices/featuredMeals";

export const store = configureStore({
  reducer: { featuredMeals },
});
