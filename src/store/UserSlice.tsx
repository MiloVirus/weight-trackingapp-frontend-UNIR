import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios, { AxiosResponse } from "axios";

interface UserState {
  loading: boolean;
  user: object;
  error: string | null;
}

interface ApiResponse
{
  password:string
}

const initialState: UserState = {
  loading: false,
  user: {},
  error: null,
};

const URL_AUTH = `${import.meta.env.VITE_URL_API}/auth/login/users`;

export const loginUser = createAsyncThunk<object, object>(
  "user/loginUser",
  async (data, thunkAPI) => {
    try {
      const response: AxiosResponse<ApiResponse> = await axios.post(URL_AUTH, data);
      const {password, ...rest} = response.data
      return rest;
      
    } catch (error) {
      return thunkAPI.rejectWithValue(error)
    }
  }
);

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(loginUser.pending, (state) => {
        state.loading = true;
        state.user = {};
        state.error = null;
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload;
        state.error = null;
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.loading = false;
        state.user = {};
        console.log(action.error.message)
        state.error = null;
      });
  },
});

export default userSlice.reducer;
