import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import CarItem from "./components/CarItem";

//00:24:45 when string or just number value in styles
//00:42:30 algin items vertically and horizontally = align items center and justify content center
//00:51:00 resizeMode for larger screens?
//01:33:00 flatlist vs scrollview
//01:41:00 flexGrow: 1 for getting max width (flex dir: row) or height (flex dir: colmn)

export default function App() {
  return (
    <View style={styles.container}>
      {/* <Text>Open up App.js to start working on your app! Yoo</Text> */}
      <CarItem />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
