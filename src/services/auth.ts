import axios from 'axios';

const API_BASE_URL = 'https://bffapi.biztel.ai:8080/api/auth';

export interface SignupData {
  name: string;
  email: string;
  password: string;
  inviteCode: string;
}

export interface LoginData {
  email: string;
  password: string;
}

export const signup = async (data: SignupData) => {
  try {
    const response = await axios.post(`${API_BASE_URL}/signup`, data);
    return response.data;
  } catch (error: any) {
    if (error.response) {
      throw new Error(error.response.data.message || 'Signup failed');
    }
    throw new Error('Network error occurred');
  }
};

export const login = async (data: LoginData) => {
  try {
    const response = await axios.post(`${API_BASE_URL}/login`, data);
    return response.data;
  } catch (error: any) {
    if (error.response) {
      throw new Error(error.response.data.message || 'Login failed');
    }
    throw new Error('Network error occurred');
  }
};