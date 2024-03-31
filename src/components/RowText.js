import React from "react";
import { Text, View } from "react-native";

const RowText = ({
  messageOne,
  messageTwo,
  containerStyles,
  messageOneStyle,
  messageTwoStyle,
}) => {
  return (
    <View style={containerStyles}>
      <Text style={messageOneStyle}> {messageOne}</Text>

      <Text style={messageTwoStyle}> {messageTwo}</Text>
    </View>
  );
};
export default RowText;
