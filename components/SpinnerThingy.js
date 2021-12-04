import React from "react";
import {
  ActivityIndicator,
  StyleSheet,
  View,
  ImageBackground,
  Dimensions,
  Text,
} from "react-native";
import forest_image from "../images/forest2.png";

var width = Dimensions.get("window").width; //full width
var height = Dimensions.get("window").height; //full height

const SpinnerThingy = () => {
  return (
    <View style={[styles.container, styles.horizontal]}>
      <ImageBackground
        source={forest_image}
        resizeMode='cover'
        style={styles.imageStyle}
        blurRadius={1}
      >
        <ActivityIndicator size='large' color='blue' />
      </ImageBackground>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
  },
  horizontal: {
    flexDirection: "row",
    justifyContent: "space-around",
  },
  imageStyle: {
    marginBottom: 150,
    alignItems: "center",
    justifyContent: "center",
    width: width,
    height: height + 100,
    flex: 1,
    justifyContent: "center",
  },
});

export default SpinnerThingy;