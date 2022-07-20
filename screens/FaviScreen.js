import { Text, StyleSheet, View } from "react-native";
import FavoriteMeal from "../components/MealDetail/FavoriteMeal";
import { globalContext } from "../store/context/favorite-context";
import { MEALS } from "../data";
import { useSelector, useDispatch } from "react-redux";

const FaviScreen = () => {
  // const { favoriteMealIds } = globalContext();
  const favoriteMealIds = useSelector((state) => state.favoritesMeals.ids);
  const favorMeals = MEALS.filter((meal) => favoriteMealIds.includes(meal.id));

  if (favorMeals.length === 0) {
    return (
      <View style={css.container}>
        <Text style={css.text}>you have no favorite meals yet.</Text>
      </View>
    );
  }
  return <FavoriteMeal items={favorMeals} />;
};

export default FaviScreen;

const css = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontSize: 18,
    fontWeight: "bold",
    color: "white",
  },
});
