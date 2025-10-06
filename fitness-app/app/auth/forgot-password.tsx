import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, StyleSheet, SafeAreaView } from "react-native";
import { useRouter } from "expo-router";

export default function ForgotPassword() {
  const router = useRouter();
  const [email, setEmail] = useState("");

  const handleReset = () => {
    if (email) {
      alert("Password reset link sent to your email.");
      router.push("/auth/login");
    } else {
      alert("Please enter your email.");
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Forgot Password?</Text>
      <Text style={styles.subtitle}>Enter your email to reset your password</Text>

      <TextInput
        style={styles.input}
        placeholder="Email"
        placeholderTextColor="#999"
        value={email}
        onChangeText={setEmail}
      />

      <TouchableOpacity style={styles.button} onPress={handleReset}>
        <Text style={styles.buttonText}>Send Reset Link</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => router.push("/auth/login")}>
        <Text style={styles.backText}>Back to Login</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#0D0D0D",
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  title: {
    color: "#fff",
    fontSize: 26,
    fontWeight: "bold",
    marginBottom: 10,
  },
  subtitle: {
    color: "#aaa",
    marginBottom: 30,
    textAlign: "center",
  },
  input: {
    backgroundColor: "#1A1A1A",
    color: "#fff",
    padding: 15,
    borderRadius: 12,
    width: "100%",
    fontSize: 16,
    marginBottom: 20,
  },
  button: {
    backgroundColor: "#f39c12",
    padding: 15,
    borderRadius: 12,
    width: "100%",
    alignItems: "center",
  },
  buttonText: {
    color: "#fff",
    fontSize: 17,
    fontWeight: "bold",
  },
  backText: {
    color: "#f39c12",
    marginTop: 25,
  },
});
