import { configureStore } from "@reduxjs/toolkit";
import { PrincipalSlice } from "./Principal";

export const store = configureStore({
    reducer: {
        Principal: PrincipalSlice.reducer
    }
})