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
  const [notFound, setNotFound] = useState<boolean>(false);

  const searchMealHandler = async () => {
    setMeals([]);
    setNotFound(false);
    setIsLoading(true);
    setTimeout(async () => {
      try {
        const response = await searchMealByName(search);

        if (response.meals) {
          setMeals(response.meals);
          setIsLoading(false);
        }
        if (!response.meals) {
          setIsLoading(false);
          setNotFound(true);
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
        setMeals((prev) => {
          const newMeals = response.meals.filter(
            (meal) => !prev.some((m) => m.idMeal === meal.idMeal)
          );
          return [...prev, ...newMeals];
        });
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
            <MealCard key={meal.idMeal} meal={meal} />
          ))}
          {notFound && (
            <div className="col-span-4 text-center text-2xl font-semibold text-red-500">
              No meals found
            </div>
          )}
        </main>
      </div>
    </>
  );
}
