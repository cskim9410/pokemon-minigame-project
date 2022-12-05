import { configureStore } from "@reduxjs/toolkit";
import holdingReducer from "./holdingPokemonSlice";

const store = configureStore({ reducer: { hold: holdingReducer } });

export default store;
