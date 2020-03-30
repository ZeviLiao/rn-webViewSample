import React, { Component } from "react";
import { WebView } from "react-native-webview";
import { Alert } from "react-native";

class MyWeb extends Component {
  render() {
    handleMessage = evt => {
      // console.log("hello");
      const message = evt.nativeEvent.data;
      // alert(message)
      Alert.alert(message);
    };
    return (
      <WebView
        source={{ uri: "http://api.17ezgo.com.tw/apps/paymentBack.html" }}
        style={{ marginTop: 20 }}
        onMessage={handleMessage}
      />
    );
  }
}

export default MyWeb;
