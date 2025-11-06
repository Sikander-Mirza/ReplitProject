import axios from "axios";

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;
export const registerTenant = async (data) => {
  try {
    
    const response = await axios.post(`${API_BASE_URL}/auth/register`, data);
    return response.data;
  } catch (error) {
    console.error("Registration Error:", error.response?.data || error.message);
    throw error;
  }
};


export const login = async (data) => {
  try {
    console.log(API_BASE_URL)

    const response = await axios.post(`${API_BASE_URL}/auth/login`, data);
    return response.data;
  } catch (error) {
    console.error("Registration Error:", error.response?.data || error.message);
    throw error;
  }
};


export const logout = async (token) => {
  try {
    const response = await axios.post(
      `${API_BASE_URL}/auth/logout`,
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
  
    const response = await axios.post(`${API_BASE_URL}/auth/forgot-password`, data);
    return response.data;
  } catch (error) {
    console.error("Registration Error:", error.response?.data || error.message);
    throw error;
  }
};


export const code = async (data) => {
  try {
    console.log(API_BASE_URL)
    const response = await axios.post(`${API_BASE_URL}/auth/verify-reset-code`, data);
    return response.data;
  } catch (error) {
    console.error("Registration Error:", error.response?.data || error.message);
    throw error;
  }
};


export const resetPassword = async (data) => {
  
  try {
    const response = await axios.post(
      `${API_BASE_URL}/auth/reset-password`,
      data
    );
    return response.data;
  } catch (error) {
    console.error("Reset Password Error:", error.response?.data || error.message);
    throw error;
  }
};
