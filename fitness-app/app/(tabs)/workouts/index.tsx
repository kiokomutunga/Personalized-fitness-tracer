import React from "react";
import { View, Text, StyleSheet, FlatList, TouchableOpacity, Image } from "react-native";

const workouts = [
  {
    id: "1",
    title: "Cardio Blast",
    description: "Burn calories and improve stamina",
    image: "https://img.freepik.com/free-photo/young-fit-man-running-park_23-2149031913.jpg",
  },
  {
    id: "2",
    title: "Strength Training",
    description: "Build muscle and power",
    image: "https://img.freepik.com/free-photo/young-man-lifting-weights-gym_23-2148848511.jpg",
  },
  {
    id: "3",
    title: "Yoga Flow",
    description: "Enhance flexibility and mindfulness",
    image: "https://img.freepik.com/free-photo/woman-doing-yoga-stretching-exercise_23-2148849701.jpg",
  },
  {
    id: "4",
    title: "HIIT Challenge",
    description: "Intense intervals to push your limits",
    image: "https://img.freepik.com/free-photo/athletic-woman-doing-crossfit-training-gym_23-2149166460.jpg",
  },
];

export default function WorkoutsScreen() {
  const renderWorkout = ({ item }: any) => (
    <TouchableOpacity style={styles.card}>
      <Image source={{ uri: item.image }} style={styles.image} />
      <View style={styles.overlay}>
        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.desc}>{item.description}</Text>
      </View>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Choose Your Workout</Text>
      <FlatList
        data={workouts}
        renderItem={renderWorkout}
        keyExtractor={(item) => item.id}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#0A0A0A",
    padding: 20,
  },
  header: {
    color: "#fff",
    fontSize: 22,
    fontWeight: "700",
    marginBottom: 15,
    textAlign: "center",
  },
  card: {
    borderRadius: 16,
    overflow: "hidden",
    marginBottom: 20,
    backgroundColor: "#1A1A1A",
    elevation: 4,
  },
  image: {
    width: "100%",
    height: 180,
    opacity: 0.85,
  },
  overlay: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: "rgba(0,0,0,0.5)",
    padding: 12,
  },
  title: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "700",
  },
  desc: {
    color: "#ccc",
    fontSize: 14,
  },
});
