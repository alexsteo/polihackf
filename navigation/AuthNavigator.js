import React from 'react';
import { StyleSheet } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { Ionicons } from '@expo/vector-icons';
import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs';

//* screens
import TipsScreen from '../screens/TipsScreen';
import NewTipsScreen from '../screens/NewTipScreen';

const tabScreenConfig = {
  Tips: {
    screen: TipsScreen,
    navigationOptions: {
      tabBarIcon: tabInfo => {
        return <Ionicons name="information" size={25} style={styles.icon} />;
      },
    },
  },
  NewTips: {
    screen: NewTipsScreen,
    navigationOptions: {
      tabBarIcon: tabInfo => {
        return <Ionicons name="add-circle" size={25} style={styles.icon} />;
      },
    },
  },
  // Points: {
  //   screen: PointsScreen,
  //   navigationOptions: {
  //     tabBarIcon: tabInfo => {
  //       return <Ionicons name="leaf" size={25} style={styles.icon} />;
  //     },
  //   },
  // },
  // Rewards: {
  //   screen: RewardsScreen,
  //   navigationOptions: {
  //     tabBarIcon: tabInfo => {
  //       return <Ionicons name="trophy" size={25} style={styles.icon} />;
  //     },
  //   },
  // },
};

const AuthNavigator = createMaterialBottomTabNavigator(tabScreenConfig, {
  activeTintColor: 'white',
  shifting: true,
  barStyle: {
    backgroundColor: 'rgba(22, 22, 22, 0.1)',
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
    elevation: 0,
  },
});

const styles = StyleSheet.create({
  icon: {
    color: 'white',
  },
});

export default createAppContainer(AuthNavigator);
