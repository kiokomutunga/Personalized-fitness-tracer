import React from "react";
import { View, Text, StyleSheet, SafeAreaView, TouchableOpacity } from "react-native";
import { useRouter } from "expo-router";

export default function HomeScreen() {
  const router = useRouter();

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>🏋️ Welcome to Your Fitness Dashboard</Text>
      <Text style={styles.subtitle}>Track workouts, calories, and goals</Text>

      <TouchableOpacity style={styles.button} onPress={() => router.push("/auth/login")}>
        <Text style={styles.buttonText}>Logout</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#0D0D0D",
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  title: {
    color: "#fff",
    fontSize: 22,
    fontWeight: "bold",
    marginBottom: 10,
    textAlign: "center",
  },
  subtitle: {
    color: "#aaa",
    fontSize: 16,
    textAlign: "center",
    marginBottom: 40,
  },
  button: {
    backgroundColor: "#f39c12",
    padding: 15,
    borderRadius: 12,
    width: "80%",
    alignItems: "center",
  },
  buttonText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },
});
