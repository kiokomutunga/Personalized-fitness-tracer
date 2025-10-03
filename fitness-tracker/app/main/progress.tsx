// app/main/Progress.tsx
import React from "react";
import { View, Text, StyleSheet, Dimensions } from "react-native";
import { LineChart } from "react-native-chart-kit";

export default function Progress() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Your Progress</Text>

      <LineChart
        data={{
          labels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
          datasets: [{ data: [200, 450, 300, 500, 700, 600] }],
        }}
        width={Dimensions.get("window").width - 40}
        height={220}
        chartConfig={{
          backgroundColor: "#000",
          backgroundGradientFrom: "#000",
          backgroundGradientTo: "#000",
          color: () => `#f96d00`,
          labelColor: () => "#fff",
        }}
        style={{ borderRadius: 16 }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#000", padding: 20 },
  title: { fontSize: 26, color: "#fff", marginBottom: 20, fontWeight: "bold" },
});
