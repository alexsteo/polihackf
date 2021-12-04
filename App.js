import React from "react";
import { StyleSheet, Text, View, Button } from "react-native";
import RegisterForm from "./components/RegisterForm";
import SomeComponent from "./screens/swipeTest";

export default function App() {
  return (
    <View style={styles.container}>
      <View>
        <RegisterForm />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
