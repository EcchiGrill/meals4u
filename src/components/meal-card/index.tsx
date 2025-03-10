"use client";
import Image from "next/image";
import { IMealCardProps } from "./meal-card.props";
import Link from "next/link";
import { FcLike } from "react-icons/fc";
import { Button } from "../ui/button";
import { useAppDispatch } from "@/store/hooks/useAppDispatch";
import { addFeaturedMeal } from "@/store/slices/featuredMeals";

const MealCard = ({ meal }: IMealCardProps) => {
  const dispatch = useAppDispatch();
  return (
    <div className="container rounded-lg flex flex-col gap-2 bg-amber-50 shadow-md p-4 text-black h-min hover:scale-105 transition duration-200 ease-in-out ">
      <Image
        src={meal.strMealThumb || "/"}
        alt={meal.strMeal}
        className="w-full aspect-square object-cover border-2 border-amber-800 rounded-lg p-0.5 max-h-[30rem]"
        sizes="100vw"
        height={0}
        width={0}
      />
      <Link
        href={`/meal/${meal.idMeal}`}
        className="hover:opacity-75 transition duration-200 ease-in-out cursor-pointer"
      >
        <h2 className="text-xl font-semibold text-center">{meal.strMeal}</h2>
      </Link>
      <hr />
      <ul>
        <li>
          <span className="font-semibold">Category:</span> {meal.strCategory}
        </li>
        <li>
          <span className="font-semibold">Origin:</span> {meal.strArea}
        </li>
      </ul>
      <Button
        variant="ghost"
        className="self-end mt-2"
        onClick={() => dispatch(addFeaturedMeal(meal))}
      >
        <FcLike />
      </Button>
    </div>
  );
};

export default MealCard;
