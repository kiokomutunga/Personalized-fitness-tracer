// app/main/Challenges.tsx
import React from "react";
import { View, Text, StyleSheet, FlatList, TouchableOpacity } from "react-native";

const challenges = [
  { id: "1", title: "Run 5km this week", reward: "50 points" },
  { id: "2", title: "Do 100 push-ups", reward: "Badge: Strong Arms" },
  { id: "3", title: "Workout 5 days in a row", reward: "Consistency Medal" },
];

export default function Challenges() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Challenges</Text>
      <FlatList
        data={challenges}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity style={styles.card}>
            <Text style={styles.challenge}>{item.title}</Text>
            <Text style={styles.reward}>{item.reward}</Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#000", padding: 20 },
  title: { fontSize: 26, color: "#fff", marginBottom: 20, fontWeight: "bold" },
  card: { backgroundColor: "#111", padding: 20, borderRadius: 12, marginBottom: 15 },
  challenge: { color: "#fff", fontSize: 18 },
  reward: { color: "#f96d00", marginTop: 5 },
});
