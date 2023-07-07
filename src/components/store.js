import { configureStore } from "@reduxjs/toolkit";
import { customReducer } from "./Reducer";

const store = configureStore({
    reducer: {
        custome: customReducer
    }
});

export default store;
