import { configureStore } from "@reduxjs/toolkit";
import userReducer from './UserSlice'
import UserDataSlice from "./UserDataSlice";

const store = configureStore(
    {
        reducer:{
            user: userReducer,
            userData: UserDataSlice
        }
    })

    export type RootState = ReturnType<typeof store.getState>
    export type AppDispatch = typeof store.dispatch

    export default store