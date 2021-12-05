import React, { useEffect, useState } from 'react';
import { fetchRewards } from "../services/reward-services/RewardServiceHandler";
import {updateUser} from "../services/user-services/UserServiceHandler";
import {useSelector} from 'react-redux';
import {
  Image,
  FlatList,
  Text,
  StyleSheet,
  View,
  TouchableOpacity,
  ImageBackground,
  Dimensions,
} from 'react-native';

import forest_image from '../images/forest2.png';

var width = Dimensions.get('window').width; //full width
var height = Dimensions.get('window').height; //full height

const imageData = require('../assets/imageData.json');

const Item = ({ reward, user, buyItem }) => (
  <View style={{ marginTop: 50, flexDirection: 'row' }}>
    <Image
      style={{ flex: 1, width: 80, height: 80, resizeMode: 'contain' }}
      source={{ uri: imageData[reward.img] }}
    />
    <View style={{ flex: 1 }}>
      <Text>Name: {reward.name}</Text>
      <Text>Description: {reward.description}</Text>
      <Text>Price: {reward.points}</Text>
    </View>
    <TouchableOpacity style={styles.btnContainer} onPress={() => buyItem(reward)}>
      <Text>Buy</Text>
    </TouchableOpacity>
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
        {/* <ImageBackground
        source={forest_image}
        resizeMode="cover"
        style={styles.imageStyle}
        blurRadius={1}
      > */}
        <Text style={{marginTop:50, fontSize:18,textAlign:"center"}}>Reward Points: {user.score}</Text>
        
        <FlatList
        data={rewards}
        renderItem={renderItem}
        keyExtractor={item => item.key}
      />
      {/* </ImageBackground> */}
    </View>
  );
};
const styles = StyleSheet.create({
  btnContainer: {
    alignSelf: 'center',
    padding: 10,
    backgroundColor: '#EDEAC2',
  },
  imageStyle: {
    paddingTop: '60%',
    alignItems: 'center',
    justifyContent: 'center',
    width: width,
    height: height + 100,
    flex: 1,
    justifyContent: 'center',
  },
});

export default RewardsPage;
