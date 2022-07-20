import { View, Text, StyleSheet } from "react-native";

const MealOverview = ({
  duration,
  complexity,
  affordability,
  style,
  textStyle,
}) => {
  return (
    <View style={[css.details, style]}>
      <Text style={[css.detailItem, textStyle]}>{duration}</Text>
      <Text style={[css.detailItem, textStyle]}>
        {complexity.toUpperCase()}
      </Text>
      <Text style={[css.detailItem, textStyle]}>
        {affordability.toUpperCase()}
      </Text>
    </View>
  );
};

export default MealOverview;

const css = StyleSheet.create({
  details: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    padding: 8,
  },
  detailItem: {
    marginHorizontal: 4,
    fontSize: 12,
  },
});
