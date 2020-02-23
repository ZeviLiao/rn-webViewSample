import React, { Component } from 'react';
import { WebView } from 'react-native-webview';

class MyWeb extends Component {
  render() {
    return (
      <WebView
        source={{ uri: 'http://127.0.0.1:3000' }}
        style={{ marginTop: 20 }}
      />
    );
  }
}

export default MyWeb