import React from "react";
import HomeNavigator from "./navigation/HomeNavigator";
import { View, Text, StyleSheet } from "react-native";

export default function App() {
  return <HomeNavigator />;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
