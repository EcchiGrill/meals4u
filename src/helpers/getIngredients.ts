import { IMeal } from "@/api/responses/meal.response";

export const getIngredients = (meal: IMeal) => {
  return Array.from({ length: 20 }, (_, i) => {
    const ingredient = meal[`strIngredient${i + 1}` as keyof typeof meal];
    const measure = meal[`strMeasure${i + 1}` as keyof typeof meal];
    return ingredient && measure ? `${measure} ${ingredient}` : null;
  })
    .filter(Boolean)
    .join(", ");
};
