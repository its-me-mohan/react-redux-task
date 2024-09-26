import { configureStore } from "@reduxjs/toolkit";
import phoneslice from "./redux"
import counterReducer from "./redux"
export const Store=configureStore({
    reducer:{
        phone:phoneslice
    }
  })