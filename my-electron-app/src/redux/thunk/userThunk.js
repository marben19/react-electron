import { createAsyncThunk } from "@reduxjs/toolkit";
import axiosClient from "../../api/axiosClient.js";

// REGISTER USER
export const registerUser = createAsyncThunk(
  "user/register",
  async ({ name, email, password }, { rejectWithValue }) => {
    try {
      const response = await axiosClient.post("/users/register", { name, email, password });
      // response.data should contain the registered user
      return response.data.user || response.data; 
    } catch (err) {
      console.error(err);
      return rejectWithValue(err.response?.data?.message || "Registration failed");
    }
  }
);

// LOGIN USER
export const loginUser = createAsyncThunk(
  "user/login",
  async ({ email, password }, { rejectWithValue }) => {
    try {
      const response = await axiosClient.post("/users/login", { email, password });
      return response.data.user || response.data;
    } catch (err) {
      console.error(err);
      return rejectWithValue(err.response?.data?.message || "Login failed");
    }
  }
);