import axios from "axios";
import { cookies } from "next/headers";

export const API = axios.create({
  baseURL: "http://10.10.7.76:8000",
});

export const getUserProfile = async () => {
  const cookieStore = await cookies();
  const token = cookieStore.get("token")?.value;

  const response = await API.get("/api/auth/profile/", {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  return response.data;
};

export const getServerPackages = async () => {
  
  const response = await API.get("/api/services/packages/");

  return response.data;
};
