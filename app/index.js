import { Link, Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";

export default function App() {
  return (
    <>
      <View style={styles.container}>
        <Stack.Screen options={{ title: "首页" }} />
        <Text>Open up App.js to start working on your app!</Text>
        <Link href="/detail/10" asChild>
          <Text style={styles.title}>这能faewf</Text>
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
