import React, { useEffect, useState } from "react";
import { CategoryCard, Image, FlatList, SafeAreaView, Text, StyleSheet, View, TextInput, Button, Dimensions } from "react-native";

import { fetchRewards } from "../services/reward-services/RewardServiceHandler";

const imageData = require("../assets/imageData.json");

const Item = ({ reward }) => (
    <View>
    <Image source={{uri: imageData[reward.img], width:180, height:180}}/>
        <View>
            <Text>{reward.name}</Text>
            <Text>{reward.description}</Text>
            <Text>{reward.price}</Text>
        </View> 
        <Button title='Buy'/>
    </View>
    );
const TreePage = () => {
    
    const [apple, setApple] = useState(0);
    const [trippy, setTrippy] = useState(0);
    const [sunglasses, setSunglasses] = useState(0);
    const [chiuaua, setChiuaua] = useState(0);

    return (
    <View>
        <View style={{resizeMode: "contain",height:Dimensions.get("window").height*0.75, width:Dimensions.get('window').width,           borderColor: "red",
          borderWidth: 1}}>
            <Image style={{ resizeMode: "contain",position:'absolute', height:Dimensions.get("window").height*0.75, width:Dimensions.get('window').width}} source={require('../assets/tree.png')}/>
            <Image style={{opacity:trippy,resizeMode: "contain",position:'absolute', height:Dimensions.get("window").height*0.75, width:Dimensions.get('window').width}} source={require('../assets/trippy.png')}/>
            <Image style={{opacity:sunglasses,resizeMode: "contain",position:'absolute', height:Dimensions.get("window").height*0.75, width:Dimensions.get('window').width}} source={require('../assets/sunglasses.png')}/>
            <Image style={{opacity:chiuaua,resizeMode: "contain",position:'absolute', height:Dimensions.get("window").height*0.75, width:Dimensions.get('window').width}} source={require('../assets/chiuaua.png')}/>
            <Image style={{opacity:apple,resizeMode: "contain",position:'absolute', height:Dimensions.get("window").height*0.75, width:Dimensions.get('window').width}} source={require('../assets/apples.png')}/>
        </View>
        <View style={{flexDirection: 'row',resizeMode: "contain", height:Dimensions.get("window").height*0.15, width:Dimensions.get('window').width,           borderColor: "blue",
          borderWidth: 1}}> 
          <View>
                <Button title ='X' style={{opacity:0, flex: 1,resizeMode: "contain",height:Dimensions.get("window").height*0.15, width:Dimensions.get('window').width*0.25}} onPress={() => setTrippy(trippy ? 0 : 1)} />
                <Image style={{flex: 1,resizeMode: "contain",height:Dimensions.get("window").height*0.15, width:Dimensions.get('window').width*0.25}} source={require('../assets/icon_trippy.png')}/>
            </View>
            <View>
                <Button title ='X' style={{opacity:0, flex: 1,resizeMode: "contain",height:Dimensions.get("window").height*0.15, width:Dimensions.get('window').width*0.25}} onPress={() => setSunglasses(sunglasses ? 0 : 1)} />
                <Image style={{flex: 1,resizeMode: "contain",height:Dimensions.get("window").height*0.15, width:Dimensions.get('window').width*0.25}} source={require('../assets/icon_sunglasses.png')}/>
            </View>
            <View>
                <Button title ='X' style={{opacity:0, flex: 1,resizeMode: "contain",height:Dimensions.get("window").height*0.15, width:Dimensions.get('window').width*0.25}} onPress={() => setChiuaua(chiuaua ? 0 : 1)} />
                <Image style={{flex: 1,resizeMode: "contain",height:Dimensions.get("window").height*0.15, width:Dimensions.get('window').width*0.25}} source={require('../assets/icon_chiuaua.png')}/>
            </View>
            <View>
                <Button title ='X' style={{opacity:0, flex: 1,resizeMode: "contain",height:Dimensions.get("window").height*0.15, width:Dimensions.get('window').width*0.25}} onPress={() => setApple(apple ? 0 : 1)} />
                <Image style={{flex: 1,resizeMode: "contain",height:Dimensions.get("window").height*0.15, width:Dimensions.get('window').width*0.25}} source={require('../assets/icon_apple.png')}/>  
            </View>
        </View>
    </View>
  );
};
const styles = StyleSheet.create({
  //Check project repo for styles
});

export default TreePage;
