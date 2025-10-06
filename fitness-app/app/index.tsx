import { View, Text, StyleSheet } from "react-native";

export default function Index() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome to Fitness App 🏋️</Text>
      <Text style={styles.subtitle}>Let’s start fresh!</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#000",
  },
  title: { color: "#f96d00", fontSize: 28, fontWeight: "bold" },
  subtitle: { color: "#fff", marginTop: 10 },
});
