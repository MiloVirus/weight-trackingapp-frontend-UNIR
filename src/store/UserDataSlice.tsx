import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios, { AxiosResponse } from "axios";

interface myObject
{   
    id:number,
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

const URL_AUTH = `https://6637b430288fedf69381191f.mockapi.io/auth/login/userWeight`;

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

    export const deleteUserData = createAsyncThunk<myObject, number>("data/deleteUserData", async(id)=>
        {
            try {
                const response: AxiosResponse = await axios.delete(`${URL_AUTH}/${id}`);
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
        })
        .addCase(deleteUserData.pending, (state) => {
            state.loading = true;
            state.data = state.data;
            state.error = null;
        })
        .addCase(deleteUserData.fulfilled, (state, action) => {
            state.loading = false;
            const deletedUserId = action.meta.arg; // Extract the deleted exercise ID from the action meta
            state.data = state.data.filter(
            data => data.id !== deletedUserId
            );
            state.error = null;
        })
        .addCase(deleteUserData.rejected, (state, action) => {
            state.loading = false;
            state.data = [];
            console.log(action.error.message)
            state.error = null;
        })
    },
});

export default userDataSlice.reducer;
