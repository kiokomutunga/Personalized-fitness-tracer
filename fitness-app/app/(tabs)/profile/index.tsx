import React, { useState } from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import { useRouter } from "expo-router";

export default function ProfileScreen() {
  const router = useRouter();
  const [user, setUser] = useState<any>({
    name: "John Doe",
    email: "johndoe@gmail.com",
    age: 25,
    weight: "75kg",
    height: "180cm",
    goal: "Gain Muscle",
    avatar: "https://img.freepik.com/free-photo/portrait-young-handsome-man-wearing-sportswear_23-2148894981.jpg",
  });

  const handleLogout = () => {
    setUser(null);
  };

  if (!user) {
    return (
      <View style={styles.centered}>
        <Text style={styles.text}>You’re not logged in 😕</Text>
        <TouchableOpacity
          style={styles.loginButton}
          onPress={() => router.push("/auth/login")}
        >
          <Text style={styles.loginText}>Go to Login</Text>
        </TouchableOpacity>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <View style={styles.profileHeader}>
        <Image source={{ uri: user.avatar }} style={styles.avatar} />
        <Text style={styles.name}>{user.name}</Text>
        <Text style={styles.email}>{user.email}</Text>
      </View>

      <View style={styles.infoBox}>
        <Text style={styles.label}>Age:</Text>
        <Text style={styles.value}>{user.age}</Text>
      </View>
      <View style={styles.infoBox}>
        <Text style={styles.label}>Weight:</Text>
        <Text style={styles.value}>{user.weight}</Text>
      </View>
      <View style={styles.infoBox}>
        <Text style={styles.label}>Height:</Text>
        <Text style={styles.value}>{user.height}</Text>
      </View>
      <View style={styles.infoBox}>
        <Text style={styles.label}>Goal:</Text>
        <Text style={styles.value}>{user.goal}</Text>
      </View>

      <TouchableOpacity style={styles.logoutButton} onPress={handleLogout}>
        <Text style={styles.logoutText}>Logout</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#0A0A0A",
    padding: 20,
  },
  profileHeader: {
    alignItems: "center",
    marginVertical: 30,
  },
  avatar: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 10,
  },
  name: {
    color: "#fff",
    fontSize: 22,
    fontWeight: "700",
  },
  email: {
    color: "#aaa",
    fontSize: 14,
  },
  infoBox: {
    flexDirection: "row",
    justifyContent: "space-between",
    backgroundColor: "#1A1A1A",
    padding: 15,
    borderRadius: 10,
    marginBottom: 10,
  },
  label: {
    color: "#ccc",
    fontSize: 16,
  },
  value: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "600",
  },
  logoutButton: {
    backgroundColor: "#FF3B30",
    padding: 15,
    borderRadius: 10,
    alignItems: "center",
    marginTop: 30,
  },
  logoutText: {
    color: "#fff",
    fontWeight: "700",
    fontSize: 16,
  },
  centered: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#0A0A0A",
  },
  text: {
    color: "#fff",
    fontSize: 18,
    marginBottom: 15,
  },
  loginButton: {
    backgroundColor: "#1E90FF",
    padding: 12,
    borderRadius: 8,
  },
  loginText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "600",
  },
});
