import React from "react";

import {
  ImageBackground,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  View
} from "react-native";
import IconText from "../components/IconText";
import moment from "moment";
const City = ({ weatherData }) => {
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

  const {
    name,
    country,
    population,
    sunrise,
    sunset

  } = weatherData
  return (
    <SafeAreaView style={container}>
      <ImageBackground
        style={imageLayout}
        source={require("../../assets/city-bacground.jpg")}
      >
        <Text style={[CityText, cityName]}> {name}</Text>
        <Text style={[CityText, CountryName]}>{country} </Text>
        <View style={populationWrapper}>
          <IconText
            iconName={"user"}
            text={`population ${population}`}
            bodyTextStyles={populationWrapper}
            color={"red"}
          />
        </View>
        <View style={risesetWrapper}>
          <IconText
            iconName={"sunrise"}
            text={moment(sunrise).format('h:mm:ss a')}
            bodyTextStyles={riseSetext}
            color={"white"}
          />
          <IconText
            iconName={"sunset"}
            text={moment(sunset).format('h:mm:ss a')}
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
  rowLayout: {
    flexDirection: 'row'
  }
});
export default City;
