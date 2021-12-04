import React from "react";
import HomeNavigator from "./navigation/HomeNavigator";
import { View, Text, StyleSheet } from "react-native";
import ViewTipsList from "./components/ViewTips";

export default function App() {
  return <ViewTipsList />;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
