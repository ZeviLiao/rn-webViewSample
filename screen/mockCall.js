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

// create a component
const MackCall = () => {
  const [data, setData] = useState({ hits: [] });
//   const [query, setQuery] = useState("redux");
//   const [search, setSearch] = useState("redux");
  useEffect(() => {
    const fetchData = async () => {
      console.log("hello");
      const result = await axios(
        "https://hn.algolia.com/api/v1/search?query=redux"
        // `http://hn.algolia.com/api/v1/search?query=${search}`
        // `http://hn.algolia.com/api/v1/search?query=${query}`
      );
      setData(result.data);
    };
    fetchData();
  }, []);

  return (
    <View>
      <Text></Text>
      <Text></Text>
      <TextInput
        style={{ height: 40, borderColor: "gray", borderWidth: 1 }}
        onChangeText={text => setQuery(text)}
      />

      <TouchableOpacity onPress={() => setSearch(query)}>
        <Text>Search</Text>
      </TouchableOpacity>

      <View style={styles.container}>
        {data.hits.map(item => (
          <View key={item.objectID}>
            <Text>{item.title}</Text>
          </View>
        ))}
      </View>
    </View>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#eee"
  }
});

//make this component available to the app
export default MackCall;
