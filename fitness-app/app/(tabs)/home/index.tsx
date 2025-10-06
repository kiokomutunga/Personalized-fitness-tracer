import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from "react-native";

export default function HomeScreen() {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.appTitle}>FitnessPro</Text>

      <Text style={styles.greeting}>Welcome back, Champion 💪</Text>
      <Text style={styles.subtitle}>Here’s your activity summary</Text>

      <View style={styles.cardRow}>
        <View style={styles.card}>
          <Text style={styles.cardTitle}>Workouts</Text>
          <Text style={styles.cardValue}>12</Text>
        </View>
        <View style={styles.card}>
          <Text style={styles.cardTitle}>Calories</Text>
          <Text style={styles.cardValue}>1,540 kcal</Text>
        </View>
      </View>

      <View style={styles.cardRow}>
        <View style={styles.card}>
          <Text style={styles.cardTitle}>Steps</Text>
          <Text style={styles.cardValue}>7,300</Text>
        </View>
        <View style={styles.card}>
          <Text style={styles.cardTitle}>Active Minutes</Text>
          <Text style={styles.cardValue}>45 min</Text>
        </View>
      </View>

      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Start New Workout</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#111",
    padding: 20,
  },
  appTitle: {
    color: "#1E90FF",
    fontSize: 28,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 20,
  },
  greeting: {
    color: "#fff",
    fontSize: 22,
    fontWeight: "600",
  },
  subtitle: {
    color: "#aaa",
    marginBottom: 20,
  },
  cardRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 15,
  },
  card: {
    backgroundColor: "#1c1c1e",
    borderRadius: 12,
    padding: 20,
    flex: 1,
    marginHorizontal: 5,
    alignItems: "center",
  },
  cardTitle: {
    color: "#aaa",
    fontSize: 16,
  },
  cardValue: {
    color: "#fff",
    fontSize: 22,
    fontWeight: "bold",
  },
  button: {
    backgroundColor: "#1E90FF",
    paddingVertical: 15,
    borderRadius: 10,
    marginTop: 30,
    alignItems: "center",
  },
  buttonText: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 16,
  },
});
