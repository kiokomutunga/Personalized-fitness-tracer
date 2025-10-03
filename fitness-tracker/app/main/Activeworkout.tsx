// app/main/ActiveWorkout.tsx
import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

export default function ActiveWorkout() {
  const [time, setTime] = useState(0);
  const [running, setRunning] = useState(false);

  useEffect(() => {
    let timer: any;
    if (running) {
      timer = setInterval(() => setTime((prev) => prev + 1), 1000);
    }
    return () => clearInterval(timer);
  }, [running]);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Active Workout</Text>
      <Text style={styles.timer}>{time}s</Text>

      <TouchableOpacity style={styles.button} onPress={() => setRunning(!running)}>
        <Text style={styles.buttonText}>{running ? "Pause" : "Start"}</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#000", justifyContent: "center", alignItems: "center" },
  title: { fontSize: 26, color: "#fff", marginBottom: 20 },
  timer: { fontSize: 50, color: "#f96d00", marginBottom: 30 },
  button: { backgroundColor: "#f96d00", padding: 15, borderRadius: 10 },
  buttonText: { color: "#fff", fontSize: 18 },
});
