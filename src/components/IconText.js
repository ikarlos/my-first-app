import React from "react";
import { FlatList, SafeAreaView, Text, View, StyleSheet } from "react-native";
import { Feather } from "@expo/vector-icons";

const IconText = ({ iconName, text, color, bodyTextStyles }) => {
  const { textTheme, container } = styles;
  return (
    <View style={container}>
      <Feather name={iconName} size={50} color={color} />
      <Text style={[bodyTextStyles, textTheme]}>{text}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
  },
  textTheme: {
    fontWeight: "bold",
  },
});
export default IconText;

