import { fetchApi } from "./fetchApi";
import { IMealResponse } from "./responses/meal.response";

export const getMealById = async (id: number): Promise<IMealResponse> =>
  fetchApi({
    endpoint: `/lookup.php?i=${id}`,
    method: "GET",
  });

export const searchMealByName = async (input: string): Promise<IMealResponse> =>
  fetchApi({
    endpoint: `/search.php?s=${input}`,
    method: "GET",
  });
