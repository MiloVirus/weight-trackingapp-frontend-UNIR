import { configureStore } from "@reduxjs/toolkit";
import userReducer from './UserSlice'
import UserDataSlice from "./UserDataSlice";
import ExcerciseSlice from "./ExcerciseSlice";
import UserExcerciseSlice from "./UserExcerciseSlice";

const store = configureStore(
    {
        reducer:{
            user: userReducer,
            userData: UserDataSlice,
            excercisesData: ExcerciseSlice,
            userExcercisesData: UserExcerciseSlice
        }
    })

    export type RootState = ReturnType<typeof store.getState>
    export type AppDispatch = typeof store.dispatch

    export default store