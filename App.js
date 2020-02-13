import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import WvScreen from './screen/WvScreen'

export default function App() {
  return (
    <View style={styles.container}>
      <WvScreen/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: 'blue',
    // alignItems: 'center',
    // justifyContent: 'center',
  },
});
