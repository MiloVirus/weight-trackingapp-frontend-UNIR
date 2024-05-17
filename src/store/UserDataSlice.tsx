import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios, { AxiosResponse } from "axios";

interface myObject
{   
    weight: number,
    date: string
}

interface dataState
{
    loading: boolean,
    data: myObject[],
    error: null
}

const initialState: dataState = {
    loading: false,
    data: [],
    error: null,
};

const URL_AUTH = `${import.meta.env.VITE_URL_API}/auth/login/userWeight`;

export const getUserData = createAsyncThunk<myObject[]>("data/getUserData", async()=>
{
    try {
        const response: AxiosResponse = await axios.get(URL_AUTH);
        console.log(response)
        return response.data
    } catch (error) {
        console.log(error)
    }
})

export const postUserData = createAsyncThunk<myObject, object>("data/postUserData", async(data)=>
    {
        try {
            const response: AxiosResponse = await axios.post(URL_AUTH, data);
            console.log(response)
            return response.data
        } catch (error) {
            console.log(error)
        }
    })

const userDataSlice = createSlice({
    name: "user",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
        .addCase(getUserData.pending, (state) => {
            state.loading = true;
            state.data = [];
            state.error = null;
        })
        .addCase(getUserData.fulfilled, (state, action) => {
            state.loading = false;
            state.data = action.payload;
            state.error = null;
        })
        .addCase(getUserData.rejected, (state, action) => {
            state.loading = false;
            state.data = [];
            console.log(action.error.message)
            state.error = null;
        })
        .addCase(postUserData.pending, (state) => {
            state.loading = true;
            state.data = state.data;
            state.error = null;
        })
        .addCase(postUserData.fulfilled, (state, action) => {
            state.loading = false;
            const data = [...state.data, action.payload]
            state.data = data;
            state.error = null;
        })
        .addCase(postUserData.rejected, (state, action) => {
            state.loading = false;
            state.data = state.data;
            console.log(action.error.message)
            state.error = null;
        });
    },
});

export default userDataSlice.reducer;
