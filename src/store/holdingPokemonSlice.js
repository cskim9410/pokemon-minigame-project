import { createSlice } from "@reduxjs/toolkit";

const holdingPokemonSlice = createSlice({
  name: "holding",
  initialState: {
    count: 2,
    pokemon: [],
  },
  reducers: {
    add(state, action) {
      state.count--;
      return (state.pokemon = [...state.pokemon, action.payload]);
    },
    remove(state, action) {
      const filter = state.pokemon.filter((poke) => poke.id !== action.payload);
      return (state.pokemon = filter);
    },
  },
});

export const holdingAction = holdingPokemonSlice.actions;
export default holdingPokemonSlice.reducer;
