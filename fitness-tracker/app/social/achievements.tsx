// app/social/Achievements.tsx
import React from "react";
import { View, Text, StyleSheet, FlatList, Image } from "react-native";

const badges = [
  { id: "1", name: "Consistency", image: require("../../assets/badge1.png") },
  { id: "2", name: "Strong Start", image: require("../../assets/badge2.png") },
  { id: "3", name: "Champion", image: require("../../assets/badge3.png") },
];

export default function Achievements() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Achievements</Text>

      <FlatList
        data={badges}
        keyExtractor={(item) => item.id}
        numColumns={2}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <Image source={item.image} style={styles.image} />
            <Text style={styles.name}>{item.name}</Text>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#000", padding: 20 },
  title: { color: "#fff", fontSize: 26, fontWeight: "bold", marginBottom: 20 },
  card: { flex: 1, backgroundColor: "#111", padding: 15, borderRadius: 10, alignItems: "center", margin: 5 },
  image: { width: 80, height: 80, marginBottom: 10 },
  name: { color: "#fff", fontSize: 16 },
});
