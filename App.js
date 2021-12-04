import React from "react";
import { StyleSheet, Text, View, Button } from "react-native";
import RegisterForm from "./components/RegisterForm";
import SomeComponent from "./screens/swipeTest";

export default function App() {
  return (
    <View style={styles.container}>
      <RegisterForm />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: "50%",
    flex: 1,
    backgroundColor: "#CCDCC8",
    alignItems: "center",
    justifyContent: "center",
  },
});
