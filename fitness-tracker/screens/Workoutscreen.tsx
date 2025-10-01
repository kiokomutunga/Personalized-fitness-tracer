import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from "react-native";

const exercises = [
  { id: 1, name: "Dumbbell Rows", reps: "10x", time: "30s" },
  { id: 2, name: "Crunch", reps: "12x", time: "30s" },
  { id: 3, name: "Squats", reps: "5x", time: "30s" },
  { id: 4, name: "Plank Hold", reps: "15s", time: "Hold" },
];

export default function WorkoutScreen({ route }: any) {
  const { workout } = route.params;

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>{workout.title}</Text>
      <Text style={styles.info}>30 Minutes | 2 Rounds | Level ★★★</Text>

      {exercises.map((ex) => (
        <View key={ex.id} style={styles.exercise}>
          <Text style={styles.exerciseName}>{ex.name}</Text>
          <Text style={styles.exerciseReps}>{ex.reps} | {ex.time}</Text>
        </View>
      ))}

      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Start Now</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#000", padding: 20 },
  title: { color: "#fff", fontSize: 24, fontWeight: "bold" },
  info: { color: "#aaa", marginBottom: 20 },
  exercise: { backgroundColor: "#111", padding: 15, borderRadius: 10, marginVertical: 8 },
  exerciseName: { color: "#fff", fontSize: 16 },
  exerciseReps: { color: "#aaa", fontSize: 14 },
  button: { backgroundColor: "#f00", padding: 15, borderRadius: 10, alignItems: "center", marginTop: 30 },
  buttonText: { color: "#fff", fontSize: 18, fontWeight: "600" },
});
