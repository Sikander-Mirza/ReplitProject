import axios from "axios";
const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;
export const cancelSubscription = async (immediately = false) => {
  try {
    const token = localStorage.getItem("token");

    console.log("🚀 Token being sent:", token);

    const response = await axios.post(
      `${API_BASE_URL}/subscriptions/cancel`,
      { immediately },
      {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      }
    );

    return response.data;
  } catch (error) {
    console.error("❌ Cancel subscription failed:", error.response || error);
    throw error;
  }
};
