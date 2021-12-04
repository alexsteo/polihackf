import React from "react";
import { StyleSheet, Text, View, Button } from "react-native";
import RegisterForm from "./components/RegisterForm";
import SomeComponent from "./screens/swipeTest";

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <SomeComponent />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
