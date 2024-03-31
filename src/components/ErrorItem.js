import React from "react";

import { View, Text, StyleSheet } from "react-native";

import { Feather } from "@expo/vector-icons";

const ErrorItem = () => {
    const { container, errorMessage } = styles;
    return (
        <View style={container} >
            <Text style={errorMessage} >Sorry Somthing Went wrong </Text>
            <Feather name={'frown'} size={100} color={'white'} />
        </View>

    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "red",
    },
    errorMessage: {
        fontSize: 30,
        fontWeight: "bold",
        color: "white",
        marginHorizontal:10,
        textAlign: "center",
    },

})
export default ErrorItem;