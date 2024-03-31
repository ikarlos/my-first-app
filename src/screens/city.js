import React from "react";

import {
  FlatList,
  SafeAreaView,
  Text,
  ImageBackground,
  StatusBar,
  View,
  StyleSheet,
} from "react-native";
import { Feather } from "@expo/vector-icons";
import IconText from "../components/IconText";
const City = () => {
  const {
    container,
    imageLayout,
    cityName,
    CountryName,
    CityText,
    populationWrapper,
    risesetWrapper,
    riseSetext,
  } = styles;
  return (
    <SafeAreaView style={container}>
      <ImageBackground
        style={imageLayout}
        source={require("../../assets/city-bacground.jpg")}
      >
        <Text style={[CityText, cityName]}> London</Text>
        <Text style={[CityText, CountryName]}>UK</Text>
        <View style={populationWrapper}>
          <IconText
            iconName={"user"}
            text={"8000"}
            bodyTextStyles={populationWrapper}
            color={"red"}
          />
        </View>
        <View style={risesetWrapper}>
          <IconText
            iconName={"sunrise"}
            text={"10:46:58AM"}
            bodyTextStyles={riseSetext}
            color={"white"}
          />
          <IconText
            iconName={"sunset"}
            text={"17:28:58PM"}
            bodyTextStyles={riseSetext}
            color={"white"}
          />
        </View>
      </ImageBackground>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
  imageLayout: {
    flex: 1,
  },
  cityName: {
    fontSize: 40,
  },
  CountryName: {
    fontSize: 30,
  },
  CityText: {
    justifyContent: "center",
    alignSelf: "center",
    fontWeight: "bold",
    color: "white",
  },
  populationWrapper: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 30,
    fontSize: 25,
    marginLeft: 7.5,
    color: "red",
  },
  risesetWrapper: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
    marginTop: 30,
  },
  riseSetext: {
    fontSize: 20,
    color: "white",
  },
  rowLayout:{
    flexDirection:'row'
  }
});
export default City;
