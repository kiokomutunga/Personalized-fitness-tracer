// app/social/Notifications.tsx
import React from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";

const notifications = [
  { id: "1", message: "🏋️ Workout completed: Full Body", time: "2h ago" },
  { id: "2", message: "🔥 You hit a new record: 5 workouts this week!", time: "1d ago" },
  { id: "3", message: "🥗 Don’t forget to log your meals today", time: "3d ago" },
];

export default function Notifications() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Notifications</Text>

      <FlatList
        data={notifications}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <Text style={styles.message}>{item.message}</Text>
            <Text style={styles.time}>{item.time}</Text>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#000", padding: 20 },
  title: { color: "#fff", fontSize: 26, fontWeight: "bold", marginBottom: 20 },
  card: { backgroundColor: "#111", padding: 15, borderRadius: 10, marginBottom: 10 },
  message: { color: "#fff", fontSize: 16 },
  time: { color: "#888", fontSize: 14, marginTop: 5 },
});
