import React, { useEffect, useState } from "react";
import { CategoryCard, Image, FlatList, Text, StyleSheet, View, TextInput, Button } from "react-native";

import { fetchRewards } from "../services/reward-services/RewardServiceHandler";

const imageData = require("../assets/imageData.json");

const Item = ({ reward }) => (
    <View style={{marginTop: 50, flexDirection: 'row'}}>
        <Image style={{flex: 1, width:80, height:80, resizeMode: "contain"}} source={{uri: imageData[reward.img]}}/>
        <View style={{flex: 1}} >
            <Text>Name: {reward.name}</Text>
            <Text>Description: {reward.description}</Text>
            <Text>Price: {reward.points}</Text>
        </View> 
        <Button title='Buy' style={{flex: 1}} />
    </View>
    );
const RewardsPage = () => {
    const [rewards, setRewards] = useState([]);
    const renderItem = ({ item }) => (
        <Item reward={item} />
      );
    
    useEffect(async () => {
        setRewards(await fetchRewards());
        console.log(rewards);
    }, []);
    
    return (
    <View>
        <FlatList
        data={rewards}
        renderItem={renderItem}
        keyExtractor={item => item.key}
        />
    </View>
  );
};
const styles = StyleSheet.create({
  //Check project repo for styles
});

export default RewardsPage;
