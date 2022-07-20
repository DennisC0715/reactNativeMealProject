import { Text, View, StyleSheet } from "react-native";

const MealList = ({ data }) => {
  return data.map((item, index) => (
    <View key={index} style={css.listItem}>
      <Text style={css.itemText}>{item}</Text>
    </View>
  ));
};

export default MealList;

const css = StyleSheet.create({
  listItem: {
    borderRadius: 6,
    paddingHorizontal: 8,
    paddingVertical: 4,
    marginVertical: 8,
    marginHorizontal: 12,
    backgroundColor: "#e2b497",
  },
  itemText: {
    color: "#341401  ",
    textAlign: "center",
  },
});
