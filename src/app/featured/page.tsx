"use client";

import MealCard from "@/components/meal-card";
import { getIngredients } from "@/helpers/getIngredients";
import { useAppSelector } from "@/store/hooks/useAppSelector";
import { selectFeaturedMeals } from "@/store/slices/featuredMeals";

const Featured = () => {
  const featuredMeals = useAppSelector(selectFeaturedMeals);

  return (
    <div>
      <main className="grid grid-cols-4 p-10 gap-10">
        {featuredMeals.length ? (
          featuredMeals.map((meal) => (
            <MealCard key={meal.idMeal} meal={meal} />
          ))
        ) : (
          <div className="col-span-4 text-center text-2xl font-semibold text-red-500">
            No meals found
          </div>
        )}
      </main>
      {featuredMeals.length ? (
        <>
          <div className="mt-20">
            <span className="font-semibold">Summary Ingredients: </span>
            {featuredMeals.map((meal) => {
              return getIngredients(meal) + ",";
            })}
          </div>
          <div className="mt-20">
            {featuredMeals.map((meal, i) => {
              return (
                <div className="mt-10" key={i}>
                  <h2 className="font-semibold">Instructions {i + 1}:</h2>
                  <p>{meal.strInstructions}</p>
                </div>
              );
            })}
          </div>
        </>
      ) : (
        ""
      )}
    </div>
  );
};

export default Featured;
