import Image from "next/image";
import { IMealCardProps } from "./meal-card.props";

const MealCard = ({
  strArea,
  strCategory,
  strMeal,
  strMealThumb,
}: IMealCardProps) => {
  return (
    <div className="container rounded-lg flex flex-col gap-2 bg-amber-50 shadow-md p-4 text-black h-min">
      <Image
        src={strMealThumb}
        alt={strMeal}
        className="w-full aspect-square object-cover border-2 border-amber-800 rounded-lg p-0.5 max-h-[30rem]"
        sizes="100vw"
        height={0}
        width={0}
      />
      <h2 className="text-xl font-semibold text-center">{strMeal}</h2>
      <hr />
      <ul>
        <li>
          <span className="font-semibold">Category:</span> {strCategory}
        </li>
        <li>
          <span className="font-semibold">Origin:</span> {strArea}
        </li>
      </ul>
    </div>
  );
};

export default MealCard;
