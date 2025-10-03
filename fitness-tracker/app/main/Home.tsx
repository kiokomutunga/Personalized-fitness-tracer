// app/main/Home.tsx
import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { useRouter } from "expo-router";

export default function Home() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Dashboard</Text>

      <View style={styles.card}>
        <Text style={styles.stat}>Calories Burned: 520 kcal</Text>
        <Text style={styles.stat}>Steps Today: 8,430</Text>
        <Text style={styles.stat}>Workouts: 2</Text>
      </View>

      <TouchableOpacity style={styles.button} onPress={() => router.push("/main/WorkoutList")}>
        <Text style={styles.buttonText}>Start a Workout</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#000", padding: 20 },
  title: { fontSize: 28, color: "#fff", marginBottom: 20, fontWeight: "bold" },
  card: { backgroundColor: "#111", padding: 20, borderRadius: 12, marginBottom: 20 },
  stat: { color: "#fff", fontSize: 16, marginBottom: 10 },
  button: { backgroundColor: "#f96d00", padding: 15, borderRadius: 10, alignItems: "center" },
  buttonText: { color: "#fff", fontSize: 18 },
});
