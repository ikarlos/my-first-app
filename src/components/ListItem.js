import { Feather } from "@expo/vector-icons";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { weatherType } from "../utilities/weatherType";
import moment from "moment";





const ListItem = ({ dt_txt, min, max, condition }) => {

  console.log(weatherType[condition[0].main]);

  return (
    <View style={styles.item}>
      <Feather name={weatherType[condition[0].main]?.icon} size={50} color={"white"} />
      <View style={styles.dateTextWrapper}>
        <Text style={styles.date}>{moment(dt_txt).format('dddd')} </Text>
        <Text style={styles.date}>{moment(dt_txt).format('h:mm:ss a')} </Text>
      </View>
      <Text style={styles.temp}>{`${Math.round(min)}° / ${Math.round(max)}° `}</Text>

    </View>
  )
  
};
const styles = StyleSheet.create({
  item: {
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
    flexDirection: "row",
    justifyContent: "space-between",
    backgroundColor: "indianred",
    alignItems: "center",
    borderBottomWidth: 5,
  },
  date: {
    color: "white",
    fontSize: 15,
  },
  temp: {
    color: "white",
    fontSize: 20,
  },
  dateTextWrapper: {
    flexDirection: 'column',
  }
});
export default ListItem;

