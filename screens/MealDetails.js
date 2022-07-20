import { MEALS, CATEGORIES } from "../data"
import { useLayoutEffect } from "react";
import FavoriteMeal from "../components/MealDetail/FavoriteMeal";

const MealDetails = ({ route, navigation }) => {
  const catId = route.params.categoryId;
  const displayMeals = MEALS.filter((item) => {
    return item.categoryIds.indexOf(catId) >= 0;
  });

  useLayoutEffect(() => {
    const categoryTitle = CATEGORIES.find(
      (category) => category.id === catId
    ).title;
    navigation.setOptions({ title: categoryTitle });
  }, [catId, navigation]);

  return <FavoriteMeal items={displayMeals}></FavoriteMeal>;
};

export default MealDetails;


