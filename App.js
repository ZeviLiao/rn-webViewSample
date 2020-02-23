import React from "react";
import { StyleSheet, Text, View } from "react-native";
import WvScreen from "./screen/WvScreen";
import Expand from "./screen/expand";
import AutoComp from "./screen/autocomplete";

export default function App() {
  return (
    <View style={styles.container}>
      <AutoComp />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    // height: 600,
    // flex: 1,
    // backgroundColor: 'blue',
    // alignItems: 'center',
    // justifyContent: 'center',
    margin: 60
  }
});
