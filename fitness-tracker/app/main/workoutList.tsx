// app/main/WorkoutList.tsx
import React from "react";
import { View, Text, StyleSheet, FlatList, TouchableOpacity } from "react-native";
import { useRouter } from "expo-router";

const workouts = [
  { id: "1", name: "Cardio", desc: "Boost stamina", color: "#f96d00" },
  { id: "2", name: "Strength", desc: "Build muscles", color: "#6a5acd" },
  { id: "3", name: "Yoga", desc: "Flexibility & Mind", color: "#20b2aa" },
];

export default function WorkoutList() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Workouts</Text>
      <FlatList
        data={workouts}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={[styles.card, { backgroundColor: item.color }]}
            onPress={() => router.push("/main/WorkoutDetail")}
          >
            <Text style={styles.cardTitle}>{item.name}</Text>
            <Text style={styles.cardDesc}>{item.desc}</Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#000", padding: 20 },
  title: { fontSize: 28, color: "#fff", marginBottom: 20, fontWeight: "bold" },
  card: { padding: 20, borderRadius: 12, marginBottom: 15 },
  cardTitle: { color: "#fff", fontSize: 20, fontWeight: "bold" },
  cardDesc: { color: "#eee", marginTop: 5 },
});
