// app/social/Profile.tsx
import React, { useState } from "react";
import { View, Text, TextInput, StyleSheet, TouchableOpacity, Image } from "react-native";

export default function Profile() {
  const [name, setName] = useState("Kioko");
  const [weight, setWeight] = useState("70");
  const [height, setHeight] = useState("175");
  const [goal, setGoal] = useState("Build muscle");

  return (
    <View style={styles.container}>
      <Image source={require("../../assets/profile.png")} style={styles.avatar} />
      <Text style={styles.title}>My Profile</Text>

      <TextInput placeholder="Name" value={name} onChangeText={setName} style={styles.input} />
      <TextInput placeholder="Weight (kg)" value={weight} onChangeText={setWeight} style={styles.input} keyboardType="numeric" />
      <TextInput placeholder="Height (cm)" value={height} onChangeText={setHeight} style={styles.input} keyboardType="numeric" />
      <TextInput placeholder="Goal" value={goal} onChangeText={setGoal} style={styles.input} />

      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Save Changes</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#000", padding: 20, alignItems: "center" },
  avatar: { width: 100, height: 100, borderRadius: 50, marginBottom: 20 },
  title: { color: "#fff", fontSize: 26, fontWeight: "bold", marginBottom: 20 },
  input: { width: "100%", backgroundColor: "#111", color: "#fff", padding: 15, borderRadius: 10, marginBottom: 15 },
  button: { backgroundColor: "#f96d00", padding: 15, borderRadius: 10, width: "100%", alignItems: "center" },
  buttonText: { color: "#fff", fontSize: 18 },
});
