//import liraries
import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput
} from "react-native";
import axios from "axios";
// import { getInfo } from "../apis/user";

// create a component
const MackCall = () => {
  const [data, setData] = useState({});
  const [search, setSearch] = useState("redux");

//   https://jsonplaceholder.typicode.com/todos/1
  useEffect(() => {
    const fetchData = async () => {
      const result = await axios(
        "https://jsonplaceholder.typicode.com/todos/1"
      );
      setData(result.data);
    };
    fetchData();
  }, [search]);

  return (
    <View style={styles.container}>
      <Text></Text>
      <Text></Text>
      <TextInput style={{ height: 40, borderColor: "gray", borderWidth: 1 }} />

      <TouchableOpacity onPress={() => setSearch(search)}>
        <Text>Search</Text>
      </TouchableOpacity>
      <Text>hello</Text>
      <View>
        <View key={data.userId}>
          <Text>{data.title}</Text>
        </View>
      </View>
    </View>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent: "center",
    // alignItems: "center",
    backgroundColor: "#2c3e50"
  }
});

//make this component available to the app
export default MackCall;
