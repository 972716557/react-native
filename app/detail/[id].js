import { Link, useLocalSearchParams } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";

export default function App() {
  const { id } = useLocalSearchParams();
  return (
    <>
      <View style={styles.container}>
        <Text>Open up App.js to start working on your app!</Text>
        <Link href="/detail" asChild>
          <Text style={styles.title}>{id}</Text>
        </Link>
        <StatusBar style="auto" />
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 20,
    color: "#f2f3ff",
  },
});
