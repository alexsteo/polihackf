import React, { useEffect, useState } from "react";
import {useSelector} from 'react-redux';
import { CategoryCard, Image, FlatList, Text, StyleSheet, View, TextInput, Button } from "react-native";

import { fetchRewards } from "../services/reward-services/RewardServiceHandler";
import {updateUser} from "../services/user-services/UserServiceHandler";

const imageData = require("../assets/imageData.json");

const Item = ({ reward, user, buyItem }) => (
    <View style={{marginTop: 50, flexDirection: 'row'}}>
        <Image style={{flex: 1, width:80, height:80, resizeMode: "contain"}} source={{uri: imageData[reward.img]}}/>
        <View style={{flex: 1}} >
            <Text>Name: {reward.name}</Text>
            <Text>Description: {reward.description}</Text>
            <Text>Price: {reward.points}</Text>
        </View> 
        <Button title='Buy' style={{flex: 1}} onPress={() => buyItem(reward)}/>
    </View>
    );
const RewardsPage = () => {
    const user = useSelector(state => state.auth.user);
    const [rewards, setRewards] = useState([]);
    const renderItem = ({ item }) => (
        <Item reward={item} user={user} buyItem={buyItem}/>
      );
    
    useEffect(async () => {
        setRewards(await fetchRewards());
        console.log(rewards);
    }, []);
    
    const buyItem = (reward) => {
        user.score -= reward.points;
        updateUser(user);
        setRewards(rewards.filter(rew => rew.name !== reward.name));
    }

    return (
    <View>
        <Text style={{marginTop:50, fontSize:18,textAlign:"center"}}>Reward Points: {user.score}</Text>
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
