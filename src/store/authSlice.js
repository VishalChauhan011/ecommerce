import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
// import react-cookie
import Cookie from "react-cookie";
import axios from "../config/axios";
import { dummyData } from "../constants";

// const LOGIN_URL = "http://localhost:8000/api/v1/auth/login";
// const SIGNUP_URL = "http://localhost:5000/api/v1/auth/signup";
// // const CHECK_USER_URL = "http://localhost:5000/api/v1/auth";
// const LOGOUT_URL = "http://localhost:5000/api/v1/";

const initialState = {
  isLoading: false,
  user: [],
  isAuthenticated: false,
  error: null,
};

export const logout = createAsyncThunk(
  "auth/logout",
  async (payload, thunkAPI) => {
    try {
      const response = await axios.get("/auth/logout", {
        withCredentials: true,
      });
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data);
    }
  }
);

export const login = createAsyncThunk(
  "auth/login",
  async (payload, thunkAPI) => {
    try {
      const response = await axios.post("/auth/login", payload);
      console.log("RESPONSE ==>", response.data.user)
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data);
    }
  }
);

export const signup = createAsyncThunk(
  "auth/signup",
  async (payload, thunkAPI) => {
    try {
      const response = await axios.post("/auth/signup", payload);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data);
    }
  }
);

// export const checkUser = createAsyncThunk(
//   "auth/checkUser",
//   async (payload, thunkAPI) => {
//     try {
//       const response = await axios.get(CHECK_USER_URL, {
//         withCredentials: true,
//       });
//       return response.data;
//     } catch (error) {
//       return thunkAPI.rejectWithValue(error.response.data);
//     }
//   }
// );

export const authSlice = createSlice({
  name: "auth",
  initialState,
  extraReducers(builder) {
    builder
      .addCase(login.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(login.fulfilled, (state, action) => {
        state.isLoading = false;
        state.user = action.payload?.user;
        state.isAuthenticated = true;
      })
      .addCase(login.rejected, (state, action) => {

        state.isLoading = false;
        state.error = action.error;
        state.isAuthenticated = false;
      })
      .addCase(signup.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(signup.fulfilled, (state, action) => {
        state.isLoading = false;
        state.user = action.payload?.user?._id;
      })
      .addCase(signup.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error;
      })
      .addCase(logout.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(logout.fulfilled, (state, action) => {
        state.isLoading = false;
        state.user = null;
        state.isAuthenticated = false;
      })
      .addCase(logout.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error;
      });
  },
});

export const selectUser = (state) => state.auth.user;

export default authSlice.reducer;
