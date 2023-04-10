import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";

import { useSelector, useDispatch } from "react-redux";

function Cmp1() {
  const st = useSelector((state) => state);
  const vl=useSelector((state)=>state.value);
  const dispatch = useDispatch();

  console.log("Use Selector", st);
  return (
    <View>
      <Text>Current Value: {vl}</Text>
    </View>
  );
}

export default Cmp1;
