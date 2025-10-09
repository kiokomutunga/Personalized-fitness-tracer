import React from "react";
import { View, Text, ScrollView, StyleSheet, Dimensions } from "react-native";
import { LineChart, ProgressChart } from "react-native-chart-kit";

const screenWidth = Dimensions.get("window").width;

export default function ProgressScreen() {
  const lineData = {
    labels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
    datasets: [
      {
        data: [2, 3, 4, 3.5, 5, 4, 6],
        strokeWidth: 2,
      },
    ],
  };

  const progressData = {
    labels: ["Calories", "Workouts", "Steps"],
    data: [0.7, 0.5, 0.9],
  };

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.header}>Your Weekly Progress</Text>

      <View style={styles.card}>
        <Text style={styles.subHeader}>Workout Duration (hours)</Text>
        <LineChart
          data={lineData}
          width={screenWidth - 40}
          height={220}
          yAxisSuffix="h"
          chartConfig={chartConfig}
          bezier
          style={styles.chart}
        />
      </View>

      <View style={styles.card}>
        <Text style={styles.subHeader}>Overall Performance</Text>
        <ProgressChart
          data={progressData}
          width={screenWidth - 40}
          height={200}
          strokeWidth={12}
          radius={32}
          chartConfig={chartConfig}
          hideLegend={false}
          style={styles.chart}
        />
      </View>

      <View style={styles.summary}>
        <Text style={styles.stat}>🔥 450 Calories Burned</Text>
        <Text style={styles.stat}>🏋️ 5 Workouts Completed</Text>
        <Text style={styles.stat}>🚶 8,000 Steps</Text>
      </View>
    </ScrollView>
  );
}

const chartConfig = {
  backgroundGradientFrom: "#0A0A0A",
  backgroundGradientTo: "#1A1A1A",
  color: (opacity = 1) => `rgba(30, 144, 255, ${opacity})`,
  labelColor: () => "#fff",
  decimalPlaces: 1,
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#0A0A0A",
    paddingHorizontal: 20,
    paddingTop: 20,
  },
  header: {
    color: "#fff",
    fontSize: 22,
    fontWeight: "700",
    marginBottom: 20,
    textAlign: "center",
  },
  card: {
    backgroundColor: "#1A1A1A",
    borderRadius: 12,
    padding: 15,
    marginBottom: 20,
    shadowColor: "#000",
    shadowOpacity: 0.3,
    shadowRadius: 5,
  },
  subHeader: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "600",
    marginBottom: 10,
  },
  chart: {
    borderRadius: 12,
  },
  summary: {
    backgroundColor: "#1A1A1A",
    borderRadius: 12,
    padding: 15,
    marginBottom: 20,
  },
  stat: {
    color: "#fff",
    fontSize: 16,
    marginBottom: 5,
  },
});
