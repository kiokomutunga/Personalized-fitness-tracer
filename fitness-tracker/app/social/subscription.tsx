// app/social/Subscription.tsx
import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

export default function Subscription() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Upgrade to Premium</Text>
      <Text style={styles.desc}>Access personalized coaching, advanced analytics, and no ads.</Text>

      <View style={styles.plan}>
        <Text style={styles.planTitle}>Monthly Plan</Text>
        <Text style={styles.price}>$9.99</Text>
      </View>

      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Subscribe Now</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#000", padding: 20, alignItems: "center" },
  title: { color: "#fff", fontSize: 26, fontWeight: "bold", marginBottom: 10 },
  desc: { color: "#aaa", textAlign: "center", marginBottom: 30 },
  plan: { backgroundColor: "#111", padding: 20, borderRadius: 10, alignItems: "center", marginBottom: 20, width: "90%" },
  planTitle: { color: "#fff", fontSize: 20 },
  price: { color: "#f96d00", fontSize: 24, fontWeight: "bold" },
  button: { backgroundColor: "#f96d00", padding: 15, borderRadius: 10, width: "90%", alignItems: "center" },
  buttonText: { color: "#fff", fontSize: 18 },
});
