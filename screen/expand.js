import React, { Component } from "react";
import { Animated, View, Text } from "react-native";
import ViewMoreText from "react-native-view-more-text";

class Example extends Component {
  renderViewMore(onPress) {
    return (
      <Text style={{ textAlign: "right" }} onPress={onPress}>
        View more
      </Text>
    );
  }
  renderViewLess(onPress) {
    return (
      <Text style={{ textAlign: "right" }} onPress={onPress}>
        View less
      </Text>
    );
  }
  render() {
    return (
      <View
        class={{
          padding: 30
        }}
      >
        <ViewMoreText
          numberOfLines={3}
          renderViewMore={this.renderViewMore}
          renderViewLess={this.renderViewLess}
          textStyle={{ textAlign: "center" }}
        >
          <Text>Lorem ipsum dolor sit amet,</Text>
        </ViewMoreText>

        <Text></Text>
        <Text></Text>
 
        <ViewMoreText
          numberOfLines={3}
          renderViewMore={this.renderViewMore}
          renderViewLess={this.renderViewLess}
          textStyle={{ textAlign: "center" }}
        >
          <Text>
            Lorem ipsum dolor sit amet, in quo dolorum ponderum, nam veri
            molestie constituto eu. Eum enim tantas sadipscing ne, ut omnes
            malorum nostrum cum. Errem populo qui ne, ea ipsum antiopam
            definitionem eos. Lorem ipsum dolor sit amet, in quo dolorum
            ponderum, nam veri molestie constituto eu. Eum enim tantas
            sadipscing ne, ut omnes malorum nostrum cum. Errem populo qui ne, ea
            ipsum antiopam definitionem eos.
          </Text>
        </ViewMoreText>
      </View>
    );
  }
}

export default Example;
