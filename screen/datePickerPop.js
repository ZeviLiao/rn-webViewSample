import { View, Text, StyleSheet, TouchableHighlight } from "react-native";
import * as React from "react";
import PopPicker from "rmc-date-picker/lib/Popup";
import DatePicker from "rmc-date-picker";
import PopupStyles from "rmc-date-picker/lib/PopupStyles";
import zhCn from "rmc-date-picker/lib/locale/zh_CN";
import enUs from "rmc-date-picker/lib/locale/en_US";
import { cn, format, minDate, maxDate, now } from "./utils";

const styles = StyleSheet.create({
  button: {
    borderWidth: 1,
    borderColor: "red",
    padding: 5,
    width: 300
  }
});

export default class PopupDemo extends React.Component {
  static defaultProps = {
    mode: "datetime",
    locale: cn ? zhCn : enUs
  };

  constructor(props) {
    super(props);
    this.state = {
      date: null
    };
  }

  onChange = date => {
    console.log("onChange", format(date));
    this.setState({
      date
    });
  };

  onDismiss = () => {
    console.log("onDismiss");
  };

  show = () => {
    console.log("my click");
  };

  render() {
    const props = this.props;
    const { date } = this.state;
    const datePicker = (
      <DatePicker
        defaultDate={now}
        minDate={minDate}
        maxDate={maxDate}
        mode={props.mode}
        locale={props.locale}
      />
    );
    return (
      <View style={{ margin: 20 }}>
        <View>
          <Text>popup date picker</Text>
        </View>
        <View>
          <PopPicker
            datePicker={datePicker}
            styles={PopupStyles}
            title="Date picker"
            date={date}
            onDismiss={this.onDismiss}
            onChange={this.onChange}
          >
            <TouchableHighlight
              onPress={this.show}
              activeOpacity={0.5}
              style={[styles.button]}
              underlayColor="#a9d9d4"
            >
              <Text>{(date && format(date)) || "open"}</Text>
            </TouchableHighlight>
          </PopPicker>
        </View>
      </View>
    );
  }
}
