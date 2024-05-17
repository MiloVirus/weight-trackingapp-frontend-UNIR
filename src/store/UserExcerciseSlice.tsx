import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios, { AxiosResponse }from "axios";

interface userExcercisesResponse
{
    exId: number;
    id: number,
    name: String,
    description: String,
    difficulty: String,
    muscle_groups: Array<string>
    image_url: String,
    userId: number
}

interface dataState
{
    loading: boolean,
    userExcercises: userExcercisesResponse[],
    error: null
}

const initialState: dataState = {
    loading: false,
    userExcercises: [],
    error: null,
};

const URL_AUTH = `https://6637b430288fedf69381191f.mockapi.io/auth/login/userExercises`;

export const getUserExcercisesData = createAsyncThunk<userExcercisesResponse[]>("userExcercises/getUserExcercisesData", async()=>
{
    try {
        const response: AxiosResponse = await axios.get(URL_AUTH)
        console.log(response.data)
        return response.data
    } catch (error) {
        
    }
})

export const postUserExcercise = createAsyncThunk<userExcercisesResponse, object>(
    "userExcercises/postUserExcercise",
    async (data) => {
      try {
        const response = await axios.post(URL_AUTH, data);
        console.log(data)
        console.log(response)
        return response.data;
      } catch (error) {
        
       console.log(error)
      }
    }
  );

  export const deleteUserExcercise = createAsyncThunk<userExcercisesResponse, number>(
    "userExcercises/deleteUserExcercise",
    async (id) => {
      try {
        const response = await axios.delete(`${URL_AUTH}/${id}`);
        return response.data; 
      } catch (error) {
        
       console.log(error)
      }
    }
  );

const UserExcercisesSlice = createSlice({
    name: "userExcercises",
    initialState,
    reducers: {},
    extraReducers: (builder) => 
        {
            builder
            .addCase(getUserExcercisesData.pending, (state) => {
                state.loading = true;
                state.userExcercises = [];
                state.error = null;
            })
            .addCase(getUserExcercisesData.fulfilled, (state, action) => {
                state.loading = false;
                state.userExcercises = action.payload;
                state.error = null;
            })
            .addCase(getUserExcercisesData.rejected, (state, action) => {
                state.loading = false;
                state.userExcercises = [];
                console.log(action.error.message)
                state.error = null;
            })
            .addCase(postUserExcercise.pending, (state) => {
                state.loading = true;
                state.userExcercises = state.userExcercises;
                state.error = null;
            })
            .addCase(postUserExcercise.fulfilled, (state, action) => {
                state.loading = false;
                const data = [...state.userExcercises, action.payload]
                console.log(action.payload)
                state.userExcercises = data;
                state.error = null;
            })
            .addCase(postUserExcercise.rejected, (state, action) => {
                state.loading = false;
                state.userExcercises = [];
                console.log(action.error.message)
                state.error = null;
            })
            .addCase(deleteUserExcercise.pending, (state) => {
                state.loading = true;
                state.userExcercises = state.userExcercises;
                state.error = null;
            })
            .addCase(deleteUserExcercise.fulfilled, (state, action) => {
                state.loading = false;
                const deletedExerciseId = action.meta.arg; // Extract the deleted exercise ID from the action meta
                state.userExcercises = state.userExcercises.filter(
                exercise => exercise.id !== deletedExerciseId
                );
                state.error = null;
            })
            .addCase(deleteUserExcercise.rejected, (state, action) => {
                state.loading = false;
                state.userExcercises = [];
                console.log(action.error.message)
                state.error = null;
            })
        }
})

export default UserExcercisesSlice.reducer;