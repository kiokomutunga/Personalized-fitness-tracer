// app/main/Nutrition.tsx
import React, { useState } from "react";
import { View, Text, TextInput, StyleSheet, TouchableOpacity } from "react-native";

export default function Nutrition() {
  const [meal, setMeal] = useState("");
  const [calories, setCalories] = useState("");

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Meal Tracker</Text>
      <TextInput placeholder="Meal" value={meal} onChangeText={setMeal} style={styles.input} />
      <TextInput placeholder="Calories" value={calories} onChangeText={setCalories} style={styles.input} keyboardType="numeric" />
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Add Meal</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#000", padding: 20 },
  title: { fontSize: 26, color: "#fff", marginBottom: 20, fontWeight: "bold" },
  input: { backgroundColor: "#111", padding: 15, borderRadius: 10, marginBottom: 15, color: "#fff" },
  button: { backgroundColor: "#f96d00", padding: 15, borderRadius: 10, alignItems: "center" },
  buttonText: { color: "#fff", fontSize: 18 },
});
