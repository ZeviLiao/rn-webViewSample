import React from "react";
import { View, Text } from "react-native";
import Carousel from "react-native-carousel-control";

export default function newSwipper() {
  return (
    <Carousel pageStyle={{ flex: 1, backgroundColor: "yellow", borderRadius: 5 }}>
      <Text>Hello</Text>
      <Text>World!</Text>
      <Text>From carousel</Text>
    </Carousel>
  );
}
