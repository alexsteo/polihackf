
import React from "react";
import { StyleSheet, Dimensions, Text, View } from "react-native";

var width = Dimensions.get("window").width; //full width
var height = Dimensions.get("window").height; //full height

const Habit = ({ habit }) => {

    return (
        <View style={viewStyle}>
            <Text style={textStyle}>{habit.title}</Text>
            <Text style={textStyle}>{habit.description}</Text>
            <Text style={ratingStyle}>{habit.rating}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    viewStyle: {
        marginTop: 30,
        width: "100%",
        height: 60,
        backgroundColor: "green",
        flex: 1,
        flexDirection: "row",
        borderRadius: 25,
        alignItems: "center",
        justifyContent: "center",
        width: width,
    },
    textStyle: {
        fontSize: 24,
        alignContent: "center"
    },
    ratingStyle: {
        fontSize: 24,
        alignContent: "center",
        color: "#00ff00"
    }
})

const viewStyle = StyleSheet.compose(styles.viewStyle);
const textStyle = StyleSheet.compose(styles.textStyle);
const ratingStyle = StyleSheet.compose(styles.ratingStyle);

export default Habit;