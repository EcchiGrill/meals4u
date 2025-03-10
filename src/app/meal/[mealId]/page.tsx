import MealPage from "@/components/common/meal-page/index";
import { PageProps } from "../../../../.next/types/app/page";
import { getMealById } from "@/api/meals";

export default async function Meal({ params }: PageProps) {
  const mealId = (await params).mealId;
  const res = await getMealById(mealId);

  return <MealPage meal={res.meals[0]} />;
}
