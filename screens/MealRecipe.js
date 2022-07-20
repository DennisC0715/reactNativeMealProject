import { View, Text, Image, StyleSheet, ScrollView } from "react-native";
import MealOverview from "../components/MealOverview";
import MealList from "../components/MealDetail/MealList";
import { MEALS } from "../data";
import Subtitle from "../components/MealDetail/Subtitle";
import { useLayoutEffect } from "react";
import IconButton from "../components/MealDetail/IconButton";
import { globalContext } from "../store/context/favorite-context";
import { useSelector, useDispatch } from "react-redux";
import { addItem, removeItem } from "../store/redux/reducers";

const MealRecipe = ({ route, navigation }) => {
  // const { favoriteMealIds, addItem, removeItem } = globalContext();
  const favoriteMealIds = useSelector((state) => state.favoritesMeals.ids);
  const dispatch = useDispatch();

  const mealId = route.params.mealId;
  const isFavoriteMeal = favoriteMealIds.includes(mealId);

  const {
    imageUrl,
    ingredients,
    steps,
    title,
    duration,
    complexity,
    affordability,
  } = MEALS.find((meal) => meal.id === mealId);

  const ToggleFavorite = () => {
    if (isFavoriteMeal) {
      dispatch(removeItem({ id: mealId }));
    } else {
      dispatch(addItem({ id: mealId }));
    }
  };

  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => {
        return (
          <IconButton
            onPress={ToggleFavorite}
            icon="star"
            color={isFavoriteMeal ? "yellow" : "white"}
          />
        );
      },
    });
  }, [navigation, ToggleFavorite]);

  return (
    <ScrollView style={css.rootContainer}>
      <Image source={{ uri: imageUrl }} style={css.image} />
      <Text style={css.title}>{title}</Text>
      <MealOverview
        duration={duration}
        complexity={complexity}
        affordability={affordability}
        textStyle={css.detailText}
      />
      <View style={css.listOuterContainer}>
        <View style={css.listContainer}>
          <Subtitle>Ingredients</Subtitle>
          <MealList data={ingredients} />
          <Subtitle>Steps</Subtitle>
          <MealList data={steps} />
        </View>
      </View>
    </ScrollView>
  );
};

export default MealRecipe;

const css = StyleSheet.create({
  rootContainer: {
    marginBottom: 32,
  },
  image: {
    height: 350,
    width: "100%",
  },
  title: {
    fontWeight: "bold",
    fontSize: 24,
    margin: 8,
    textAlign: "center",
    color: "white",
  },
  detailText: {
    color: "white",
  },
  listContainer: {
    width: "80%",
  },
  listOuterContainer: {
    alignItems: "center",
  },
});
