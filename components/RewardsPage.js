import React, { useEffect, useState } from "react";
import { CategoryCard, Image, FlatList, SafeAreaView, Text, StyleSheet, View, TextInput, Button } from "react-native";

import { fetchRewards } from "../services/reward-services/RewardServiceHandler";

const imageData = require("../assets/imageData.json");

const Item = ({ reward }) => (
    <View style={{marginTop: 50, flexDirection: 'row'}}>
        <Image style={{flex: 1}} source={{uri: imageData[reward.img], width:180, height:180}}/>
        <View style={{flex: 1}} >
            <Text>{reward.name}</Text>
            <Text>{reward.description}</Text>
            <Text>{reward.price}</Text>
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
