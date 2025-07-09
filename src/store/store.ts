import { configureStore } from "@reduxjs/toolkit";
import carsReducer from "./slice/carsSlice"
import filtersReducer from "./slice/filtersSlice"

export const store = configureStore({
    reducer: {
        cars: carsReducer,
        filters: filtersReducer,
    }
})

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;