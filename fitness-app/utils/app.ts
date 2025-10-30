import axios from "axios";

export const API = axios.create({
    baseURL: "http://localhost:4000/api"
});

export const getAuthToken = async () => {
    // This function would normally retrieve the auth token from secure storage
    return "your-auth-token";