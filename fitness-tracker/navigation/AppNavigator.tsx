import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "../screens/HomeScreen";
import WorkoutScreen from "../screens/WorkoutScreen";

export type RootStackParamList = {
  Home: undefined;
  Workout: { workout: any };
};

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function AppNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Workout" component={WorkoutScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
