// src/api/metrics.js

export async function getDashboardMetrics() {
  try {
    const token = localStorage.getItem("token"); // ✅ get token from localStorage
const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;
    const response = await fetch(`${API_BASE_URL}/metrics`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${token}`, // ✅ Attach token in header
      },
      credentials: "include",
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    return data;

  } catch (error) {
    console.error("❌ Error fetching dashboard metrics:", error);
    return null;
  }
}


// src/api/adminUsers.js

export async function getAdminUsers(page = 1) {
  try {
    const token = localStorage.getItem("token"); // ✅ read token
const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;
    const response = await fetch( `${API_BASE_URL}/admin/users?page=${page}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${token}`, // ✅ Pass token
      },
      credentials: "include",
    });

    if (!response.ok) {
      throw new Error(`HTTP Error: ${response.status}`);
    }

    const data = await response.json();
    return data;

  } catch (error) {
    console.error("❌ Error fetching users:", error);
    return null;
  }
}
