import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

interface excercisesResponse
{
    exId: number;
    id: number,
    name: String,
    description: String,
    difficulty: String,
    muscle_groups: Array<string>
    image_url: String,
}

interface dataState
{
    loading: boolean,
    excercises: excercisesResponse[],
    error: null
}

const initialState: dataState = {
    loading: false,
    excercises: [],
    error: null,
};

const URL_AUTH = `https://run.mocky.io/v3/59960331-b9fa-4db2-b407-0963a0abd60a`;

export const getExcercisesData = createAsyncThunk<excercisesResponse[]>("excercises/getExcercisesData", async()=>
{
    try {
        const response = await axios.get(URL_AUTH)
        console.log(response.data)
        return response.data
    } catch (error) {
        
    }
})

const excercisesSlice = createSlice({
    name: "excercises",
    initialState,
    reducers: {},
    extraReducers: (builder) => 
        {
            builder
            .addCase(getExcercisesData.pending, (state) => {
                state.loading = true;
                state.excercises = [];
                state.error = null;
            })
            .addCase(getExcercisesData.fulfilled, (state, action) => {
                state.loading = false;
                state.excercises = action.payload;
                state.error = null;
            })
            .addCase(getExcercisesData.rejected, (state, action) => {
                state.loading = false;
                state.excercises = [];
                console.log(action.error.message)
                state.error = null;
            })
        }
})

export default excercisesSlice.reducer;