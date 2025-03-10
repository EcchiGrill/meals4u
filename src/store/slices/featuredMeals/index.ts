import { IMeal } from "@/api/responses/meal.response";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { FeaturedMealsState } from "./featuredMeals.types";

const initialState: FeaturedMealsState = {
  meals: [],
};

const featuredMeals = createSlice({
  name: "featuredMeals",
  initialState,
  reducers: {
    setFeaturedMeals: (state, action: PayloadAction<IMeal[]>) => {
      return {
        ...state,
        meals: action.payload,
      };
    },

    addFeaturedMeal: (state, action: PayloadAction<IMeal>) => {
      return {
        ...state,
        meals: state.meals
          ? [...state.meals, action.payload]
          : [action.payload],
      };
    },

    removeFeaturedMeal: (state, action: PayloadAction<string>) => {
      const meals = state.meals.filter((m) => m.idMeal !== action.payload);

      return {
        ...state,
        meals,
      };
    },
  },
  selectors: {
    selectFeaturedMeals: (state) => state.meals,
  },
});

export const { selectFeaturedMeals } = featuredMeals.selectors;

export const { addFeaturedMeal, removeFeaturedMeal, setFeaturedMeals } =
  featuredMeals.actions;

export default featuredMeals.reducer;
