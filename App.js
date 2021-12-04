import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import HomeNavigator from './navigation/HomeNavigator';

export default function App() {
  return <HomeNavigator />;
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center' },
});
