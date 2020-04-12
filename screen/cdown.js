import CountDown from "react-native-countdown-component";

import React, { useState, useEffect } from "react";
import { View, Text } from "react-native";
import moment from 'moment'

const Timer = ({ seconds }) => {
  // initialize timeLeft with the seconds prop
  const [timeLeft, setTimeLeft] = useState(seconds);

  useEffect(() => {
    // exit early when we reach 0
    if (!timeLeft) return;

    // save intervalId to clear the interval when the
    // component re-renders
    const intervalId = setInterval(() => {
      setTimeLeft(timeLeft - 1);
    }, 1000);

    // clear interval on re-render to avoid memory leaks
    return () => clearInterval(intervalId);
    // add timeLeft as a dependency to re-rerun the effect
    // when we update it
  }, [timeLeft]);

  return (
    <View style={{ marginTop: 50 }}>
      
      <Text>{moment.utc(timeLeft * 1000).format("mm:ss")}</Text>
    </View>
  );
};

export default Timer;
