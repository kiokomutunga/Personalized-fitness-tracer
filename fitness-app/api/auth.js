import api from "./api";
import AsyncStorage from "@react-native-async-storage/async-storage";

export const loginUser = async (email, password) => {
  try {
    const res = await api.post("/auth/login", { email, password });
    const data = res.data;

    if (data.success) {
      // Save JWT + user to local storage
      await AsyncStorage.setItem("token", data.token);
      await AsyncStorage.setItem("user", JSON.stringify(data.user));
    }

    return data;
  } catch (error) {
    console.log("Login API error:", error.response?.data || error.message);
    throw error.response?.data || { message: "Network error" };
  }
};