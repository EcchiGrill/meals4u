import MealCard from "../meal-card";

const meals = [
  {
    idMeal: "52850",
    strMeal: "Chicken Couscous",
    strDrinkAlternate: null,
    strCategory: "Chicken",
    strArea: "Moroccan",
    strInstructions:
      "Heat the olive oil in a large frying pan and cook the onion for 1-2 mins just until softened. Add the chicken and fry for 7-10 mins until cooked through and the onions have turned golden. Grate over the ginger, stir through the harissa to coat everything and cook for 1 min more.\r\n\r\nTip in the apricots, chickpeas and couscous, then pour over the stock and stir once. Cover with a lid or tightly cover the pan with foil and leave for about 5 mins until the couscous has soaked up all the stock and is soft. Fluff up the couscous with a fork and scatter over the coriander to serve. Serve with extra harissa, if you like.",
    strMealThumb:
      "https://www.themealdb.com/images/media/meals/qxytrx1511304021.jpg",
    strTags: null,
    strYoutube: "https://www.youtube.com/watch?v=GZQGy9oscVk",
    strIngredient1: "Olive Oil",
    strIngredient2: "Onion",
    strIngredient3: "Chicken Breast",
    strIngredient4: "Ginger",
    strIngredient5: "Harissa Spice",
    strIngredient6: "Dried Apricots",
    strIngredient7: "Chickpeas",
    strIngredient8: "Couscous",
    strIngredient9: "Chicken Stock",
    strIngredient10: "Coriander",
    strIngredient11: "",
    strIngredient12: "",
    strIngredient13: "",
    strIngredient14: "",
    strIngredient15: "",
    strIngredient16: "",
    strIngredient17: "",
    strIngredient18: "",
    strIngredient19: "",
    strIngredient20: "",
    strMeasure1: "1 tbsp",
    strMeasure2: "1 chopped",
    strMeasure3: "200g",
    strMeasure4: "pinch",
    strMeasure5: "2 tblsp ",
    strMeasure6: "10",
    strMeasure7: "220g",
    strMeasure8: "200g",
    strMeasure9: "200ml",
    strMeasure10: "Handful",
    strMeasure11: "",
    strMeasure12: "",
    strMeasure13: "",
    strMeasure14: "",
    strMeasure15: "",
    strMeasure16: "",
    strMeasure17: "",
    strMeasure18: "",
    strMeasure19: "",
    strMeasure20: "",
    strSource:
      "https://www.bbcgoodfood.com/recipes/13139/onepan-chicken-couscous",
    strImageSource: null,
    strCreativeCommonsConfirmed: null,
    dateModified: null,
  },
];

export default function Home() {
  return (
    <main className="grid grid-cols-4 p-10">
      {meals.map((meal) => (
        <MealCard
          key={meal.idMeal}
          strArea={meal.strArea}
          strMeal={meal.strMeal}
          strCategory={meal.strCategory}
          strMealThumb={meal.strMealThumb}
        />
      ))}
    </main>
  );
}
