import React from "react";
import { StyleSheet, Text, View } from "react-native";
import WvScreen from "./screen/WvScreen";
import Expand from "./screen/expand";
import AutoComp from "./screen/autocomplete";
import DtPicker from "./screen/datePicker";
import DtPickerPop from "./screen/datePickerPop";
import NewSwipper from "./screen/newSwipper";

export default function App() {
  return (
    <View style={styles.container}>
      <NewSwipper />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 400,
    // flex: 1,
    // backgroundColor: 'blue',
    // alignItems: 'center',
    // justifyContent: 'center',
    // margin: 60
  }
});
