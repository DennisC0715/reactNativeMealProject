import { View, FlatList, StyleSheet } from "react-native";
import MealItem from "../MealItem";

const FavoriteMeal = ({ items }) => {
  const renderMealItem = (itemData) => {
    return (
      <View>
        <MealItem
          id={itemData.item.id}
          title={itemData.item.title}
          imageUrl={itemData.item.imageUrl}
          affordability={itemData.item.affordability}
          duration={itemData.item.duration}
          complexity={itemData.item.complexity}
        />
      </View>
    );
  };

  return (
    <View style={css.container}>
      <FlatList
        data={items}
        keyExtractor={(item) => item.index}
        renderItem={renderMealItem}
      ></FlatList>
      {/* <ScrollView>
        {displayMeals.map((item) => {
          return (
            <MealItem
              key={item.id}
              title={item.title}
              imageUrl={item.imageUrl}
              affordability={item.affordability}
              duration={item.duration}
              complexity={item.complexity}
            />
          );
        })}
      </ScrollView> */}
    </View>
  );
};

export default FavoriteMeal;

const css = StyleSheet.create({
  container: {
    flex: 1,
    padding: 1,
  },
});
