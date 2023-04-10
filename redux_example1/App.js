import { StatusBar } from "expo-status-bar";
import { Button, StyleSheet, Text, View } from "react-native";

import mySlick from "./my_redux/mySlick";
import myStore from "./my_redux/myStore";

import { Provider } from "react-redux";
import { useState } from "react";
import Cmp1 from "./components/Cmp1";

const { incremented, decremented, setObj } = mySlick.actions;

myStore.dispatch(setObj({ id: 0, name: "dsfg" }));

export default function App() {
  const [mySt1, setMySt1] = useState(myStore.getState().value);
  // myStore.subscribe(() => console.log("My Store", myStore.getState()));
  myStore.subscribe(() => {
    setMySt1(myStore.getState().value);
  });

  return (
    <View style={styles.container}>
      <Button
        title="Click"
        onPress={() => {
          myStore.dispatch(incremented());
        }}
      ></Button>
      <Text>Open up App.js to start working on your app!</Text>
      <Text>{mySt1}</Text>
      <StatusBar style="auto" />
      <Provider store={myStore}>
        <Cmp1 />
      </Provider>
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
