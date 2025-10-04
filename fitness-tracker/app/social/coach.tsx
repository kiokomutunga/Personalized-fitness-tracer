// app/social/Coach.tsx
import React from "react";
import { View, Text, StyleSheet, FlatList, TouchableOpacity } from "react-native";

const coaches = [
  { id: "1", name: "Coach Aisha", specialty: "Strength & Conditioning" },
  { id: "2", name: "Coach David", specialty: "Cardio & Endurance" },
  { id: "3", name: "Coach Maria", specialty: "Yoga & Mindfulness" },
];

export default function Coach() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Your Trainers</Text>
      <FlatList
        data={coaches}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity style={styles.card}>
            <Text style={styles.name}>{item.name}</Text>
            <Text style={styles.specialty}>{item.specialty}</Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#000", padding: 20 },
  title: { color: "#fff", fontSize: 26, fontWeight: "bold", marginBottom: 20 },
  card: { backgroundColor: "#111", padding: 15, borderRadius: 10, marginBottom: 15 },
  name: { color: "#fff", fontSize: 18 },
  specialty: { color: "#f96d00", marginTop: 5 },
});
