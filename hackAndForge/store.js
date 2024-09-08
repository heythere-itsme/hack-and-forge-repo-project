import { configureStore } from "@reduxjs/toolkit";
import DepartLearnreducer from "./departmentLearnSlice";
import LoginSlice from "./logindet";


export const store = configureStore({
    reducer: {
        perfs: DepartLearnreducer,
        logintruf: LoginSlice,
    }
})
