import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

export default function App() {
  const callTest = async () => {
    const response = await fetch(
      'https://pulihack-default-rtdb.europe-west1.firebasedatabase.app/user.json',
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          username: 'user1',
          description: 'plm',
        }),
      }
    );
  };
  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <Button title="Go" onPress={callTest} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
