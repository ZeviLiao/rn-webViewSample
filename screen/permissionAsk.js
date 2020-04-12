//import liraries
import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";
import * as Permissions from "expo-permissions";


const registerLocationAndNotifications = async () => {
  let status;
  status = await Permissions.getAsync(Permissions.NOTIFICATIONS);
  let statusNotifications = status.status;
  console.log("Notifications Permissions: ", statusNotifications);

  status = await Permissions.getAsync(Permissions.LOCATION);
  let statusLocation = status.status;
  console.log("Location Permissions: ", statusLocation);

  if (statusNotifications !== "granted") {
    console.log("Requesting Notification Permissions");
    status = await Permissions.askAsync(Permissions.NOTIFICATIONS);
    statusNotifications = status.status;
  }

  if (statusLocation !== "granted") {
    console.log("Requesting Location Permissions");
    status = await Permissions.askAsync(Permissions.LOCATION);
    statusLocation = status.status;
  }

  if (statusNotifications !== "granted" || statusLocation !== "granted") {
    console.log("Permissions not granted");
    return;
  }

  console.log("Permissions Granted!");
};

// create a component
const MyComponent = () => {
  registerLocationAndNotifications();

  return (
    <View style={styles.container}>
      <Text>MyComponent</Text>
    </View>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#2c3e50",
  },
});

//make this component available to the app
export default MyComponent;
