"use client";
import { getMealById, searchMealByName } from "@/api/meals";
import MealCard from "../meal-card";
import { useEffect, useState } from "react";
import { IMeal } from "@/api/responses/meal.response";
import { Input } from "../ui/input";
import { ImSpinner2 } from "react-icons/im";
import { INITIAL_MEAL_ID, SEARCH_DEBOUNCE_TIME } from "@/constants";

export default function Home() {
  const [meals, setMeals] = useState<IMeal[]>([]);
  const [search, setSearch] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const searchMealHandler = async () => {
    setIsLoading(true);
    setTimeout(async () => {
      try {
        const response = await searchMealByName(search);

        if (response.meals) {
          setMeals(response.meals);
          setIsLoading(false);
        }
      } catch (error) {
        console.log(error);
      }
    }, SEARCH_DEBOUNCE_TIME);
  };

  const getMeals = () => {
    setMeals([]);
    for (let i = 0; i < 10; i++) {
      getMealById(i + INITIAL_MEAL_ID).then((response) => {
        setMeals((prev) => [...prev, ...response.meals]);
      });
    }
  };

  useEffect(() => {
    if (search.length >= 3) searchMealHandler();

    if (!search) {
      getMeals();
    }
  }, [search]);

  return (
    <>
      <div>
        <div className="flex gap-3 items-center">
          <Input
            placeholder="Search your meal..."
            className="mt-4 max-w-[300px] bg-gray-100 placeholder:text-gray-500"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          {isLoading && (
            <ImSpinner2 className="size-8 animate-spin text-gray mt-5" />
          )}
        </div>

        <main className="grid grid-cols-4 p-10 gap-10">
          {meals.map((meal) => (
            <MealCard
              key={meal.idMeal}
              strArea={meal.strArea}
              strMeal={meal.strMeal}
              strCategory={meal.strCategory}
              strMealThumb={meal.strMealThumb || "/"}
            />
          ))}
        </main>
      </div>
    </>
  );
}
