import { createContext, useState } from "react";

export const PokemonContext = createContext({
  pokemon: [],
  addPok: (pokemon) => {},
  removePok: (id) => {},
  initSetPok: (storageArr) => {},
});

const ContextProvider = ({ children }) => {
  const [holdingPok, setHodingPok] = useState([]);

  const addPok = (pokemon) => {
    setHodingPok((state) => {
      return [...state, pokemon];
    });
  };
  const removePok = (id) => {
    setHodingPok((state) => {
      return state.filter((pok) => pok.id !== id);
    });
  };
  const initialSetPokemon = (storage) => setHodingPok(storage);

  return (
    <PokemonContext.Provider
      value={{
        pokemon: holdingPok,
        addPok,
        removePok,
        initSetPok: initialSetPokemon,
      }}
    >
      {children}
    </PokemonContext.Provider>
  );
};

export default ContextProvider;
