// app/social/Community.tsx
import React from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";

const leaderboard = [
  { id: "1", name: "Kioko", points: 1500 },
  { id: "2", name: "Alice", points: 1420 },
  { id: "3", name: "John", points: 1300 },
  { id: "4", name: "Mary", points: 1220 },
];

export default function Community() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Community Leaderboard</Text>

      <FlatList
        data={leaderboard}
        keyExtractor={(item) => item.id}
        renderItem={({ item, index }) => (
          <View style={[styles.card, index === 0 && styles.top]}>
            <Text style={styles.rank}>#{index + 1}</Text>
            <Text style={styles.name}>{item.name}</Text>
            <Text style={styles.points}>{item.points} pts</Text>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#000", padding: 20 },
  title: { color: "#fff", fontSize: 26, marginBottom: 20, fontWeight: "bold" },
  card: {
    flexDirection: "row",
    justifyContent: "space-between",
    backgroundColor: "#111",
    padding: 15,
    borderRadius: 10,
    marginBottom: 10,
  },
  top: { backgroundColor: "#f96d00" },
  rank: { color: "#fff", fontSize: 18, fontWeight: "bold" },
  name: { color: "#fff", fontSize: 18 },
  points: { color: "#ccc" },
});
