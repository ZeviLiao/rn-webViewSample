import React, { Component } from "react";
import { WebView } from "react-native-webview";
import { Alert } from "react-native";

class MyWeb extends Component {
  render() {
    handleMessage = evt => {
      console.log("hello");
      const message = evt.nativeEvent.data;
      // alert(message)
    };
    return (
      <WebView
        source={{ uri: "http://127.0.0.1:5500/apps/paymentBack.html" }}
        style={{ marginTop: 20 }}
        onMessage={(event)=> Alert.alert(event.nativeEvent.data) }
      />
    );
  }
}

export default MyWeb;
