// app/auth/ForgotPassword.tsx
import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from "react-native";
import { useRouter } from "expo-router";

export default function ForgotPassword() {
  const [email, setEmail] = useState("");
  const router = useRouter();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Reset Password</Text>
      <TextInput placeholder="Enter your email" value={email} onChangeText={setEmail} style={styles.input} />

      <TouchableOpacity style={styles.button} onPress={() => alert("Password reset link sent!")}>
        <Text style={styles.buttonText}>Send Reset Link</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => router.back()}>
        <Text style={styles.link}>Back to Login</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: "center", padding: 20, backgroundColor: "#000" },
  title: { fontSize: 28, color: "#fff", marginBottom: 20, fontWeight: "bold" },
  input: { backgroundColor: "#222", padding: 15, marginBottom: 15, borderRadius: 10, color: "#fff" },
  button: { backgroundColor: "#f96d00", padding: 15, borderRadius: 10, alignItems: "center", marginBottom: 10 },
  buttonText: { color: "#fff", fontSize: 18 },
  link: { color: "#f96d00", textAlign: "center", marginTop: 10 },
});
