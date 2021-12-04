import React from "react";
import { Text, View, StyleSheet } from "react-native";

const Tip = ({ tip }) => {
  console.log(tip);

  return <Card iconDisable title={tip.title} description={tip.description} />;
};

export default Tip;
