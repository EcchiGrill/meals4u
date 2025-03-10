import Image from "next/image";
import { IMealPageProps } from "./meal-page.props";
import { getIngredients } from "@/helpers/getIngredients";

const MealPage = ({ meal }: IMealPageProps) => {
  return (
    <main className="container p-4 flex place-content-center place-items-center gap-32">
      <Image
        src={meal.strMealThumb || "/"}
        alt={meal.strMeal}
        className="w-auto h-[35rem] aspect-square object-cover border-2 border-amber-800 rounded-lg p-0.5"
        sizes="100vw"
        height={0}
        width={0}
      />
      <div>
        <h1 className="text-3xl font-semibold text-center mb-12">
          {meal.strMeal}
        </h1>
        <hr />
        <ul>
          <li>
            <span className="font-semibold">Category:</span> {meal.strCategory}
          </li>
          <li>
            <span className="font-semibold">Origin:</span> {meal.strArea}
          </li>
          <li>
            <span className="font-semibold">Ingredients:</span>{" "}
            {getIngredients(meal)}
          </li>
        </ul>
        <p className="mt-5">{meal.strInstructions}</p>
      </div>
    </main>
  );
};

export default MealPage;
