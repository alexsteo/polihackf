import React from "react";
import { Text, View } from "react-native";

const Tip = ({ tip }) => {

    console.log(tip);

    return (
        <View>
            <Text>{tip.title}</Text>
            <Text>{tip.description}</Text>
        </View>
    )
}

export default Tip;