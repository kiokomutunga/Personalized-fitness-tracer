import React from "react";
import { View, Text, StyleSheet, ScrollView, Image, TouchableOpacity } from "react-native";

const workouts = [
  { id: 1, title: "Full Body Workout", duration: "30 Min", image: "https://i.ibb.co/1JdXjL9/workout1.png" },
  { id: 2, title: "Lower Body Workout", duration: "20 Min", image: "https://i.ibb.co/gTLXK95/workout2.png" },
];

export default function HomeScreen({ navigation }: any) {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.header}>Start Your{"\n"}Fitness Journey</Text>

      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {workouts.map((item) => (
          <TouchableOpacity
            key={item.id}
            style={styles.card}
            onPress={() => navigation.navigate("Workout", { workout: item })}
          >
            <Image source={{ uri: item.image }} style={styles.cardImage} />
            <Text style={styles.cardTitle}>{item.title}</Text>
            <Text style={styles.cardSub}>{item.duration}</Text>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#000", padding: 20 },
  header: { color: "#fff", fontSize: 28, fontWeight: "bold", marginVertical: 20 },
  card: { backgroundColor: "#111", borderRadius: 15, marginRight: 15, padding: 15, width: 200 },
  cardImage: { width: "100%", height: 120, borderRadius: 10 },
  cardTitle: { color: "#fff", fontSize: 16, marginTop: 10 },
  cardSub: { color: "#aaa", fontSize: 14 },
});
