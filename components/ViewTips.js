import React, { useEffect, useState } from "react";
import { View, FlatList, StyleSheet, ImageBackground, Dimensions } from 'react-native';
import forest_image from '../images/forest2.png';
import { fetchTips } from "../services/tips-service/TipsServiceHandler";
import Tip from "./Tip"

var width = Dimensions.get('window').width;
var height = Dimensions.get('window').height;

const ViewTipsList = () => {

  useEffect(async () => setTipsList(await fetchTips()), [])

  const [tipsList, setTipsList] = useState([]);

  const a = ({ item }) => (<Tip tip={item} />)

  const displayTips = () => {
    return (
      <View style={styles.container}>
        <ImageBackground
        source={forest_image}
        resizeMode="cover"
        style={imageStyle}
        blurRadius={1}
      >
        <FlatList data={tipsList} renderItem={a} keyExtractor={(item) => item.title} />
      
      </ImageBackground>
      </View>
    );
  }

  return (
    displayTips()
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 2,
  },

  imageStyle: {
    paddingTop: '80%',
    alignItems: 'center',
    justifyContent: 'center',
    width: width,
    height: height + 100,
    flex: 1,
    justifyContent: 'center',
  },
});

const imageStyle = StyleSheet.compose(styles.imageStyle);

export default ViewTipsList;
