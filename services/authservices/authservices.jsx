import axios from "axios";
import API_BASE_URL from "../../config/api/apiconfig";

export const registerTenant = async (data) => {
  try {
    console.log(API_BASE_URL)
    const response = await axios.post("https://tms.freelancerportfolio.me/api/auth/register", data);
    return response.data;
  } catch (error) {
    console.error("Registration Error:", error.response?.data || error.message);
    throw error;
  }
};


export const login = async (data) => {
  try {
    console.log(API_BASE_URL)
    const response = await axios.post("https://tms.freelancerportfolio.me/api/auth/login", data);
    return response.data;
  } catch (error) {
    console.error("Registration Error:", error.response?.data || error.message);
    throw error;
  }
};


export const logout = async (token) => {
  try {
    const response = await axios.post(
      "https://tms.freelancerportfolio.me/api/auth/logout",
      {},
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    return response.data;
  } catch (error) {
    console.error("Logout Error:", error.response?.data || error.message);
    throw error;
  }
};


export const forget = async (data) => {
  try {
    console.log(API_BASE_URL)
    console.log(data)
    const response = await axios.post("https://tms.freelancerportfolio.me/api/auth/forgot-password", data);
    return response.data;
  } catch (error) {
    console.error("Registration Error:", error.response?.data || error.message);
    throw error;
  }
};


export const code = async (data) => {
  try {
    console.log(API_BASE_URL)
    const response = await axios.post("https://tms.freelancerportfolio.me/api/auth/verify-reset-code", data);
    return response.data;
  } catch (error) {
    console.error("Registration Error:", error.response?.data || error.message);
    throw error;
  }
};


export const resetPassword = async (data) => {
  try {
    const response = await axios.post(
      "https://tms.freelancerportfolio.me/api/auth/reset-password",
      data
    );
    return response.data;
  } catch (error) {
    console.error("Reset Password Error:", error.response?.data || error.message);
    throw error;
  }
};
