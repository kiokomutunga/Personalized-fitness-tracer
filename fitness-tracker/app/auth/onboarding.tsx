// app/auth/Onboarding.tsx
import React from "react";
import Onboarding from "react-native-onboarding-swiper";
import { Image } from "react-native";
import { useRouter } from "expo-router";

export default function OnboardingScreen() {
  const router = useRouter();

  return (
    <Onboarding
      onSkip={() => router.replace("/auth/Login")}
      onDone={() => router.replace("/auth/Login")}
      pages={[
        {
          backgroundColor: "#000",
          image: <Image source={require("../../assets/workout1.png")} style={{ width: 200, height: 200 }} />,
          title: "Track Workouts",
          subtitle: "Log your exercises and stay consistent!",
        },
        {
          backgroundColor: "#111",
          image: <Image source={require("../../assets/workout2.png")} style={{ width: 200, height: 200 }} />,
          title: "Measure Progress",
          subtitle: "View charts & analytics of your fitness journey",
        },
        {
          backgroundColor: "#222",
          image: <Image source={require("../../assets/workout3.png")} style={{ width: 200, height: 200 }} />,
          title: "Achieve Goals",
          subtitle: "Stay motivated and crush your goals",
        },
      ]}
    />
  );
}
