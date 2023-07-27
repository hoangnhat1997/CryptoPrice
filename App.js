import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import ConinItem from "./src/components/CoinItem";

export default function App() {
  return (
    <View style={styles.container}>
      <ConinItem />
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
