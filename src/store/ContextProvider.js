import { Children, createContext, useState } from "react";

export const PokemonContext = createContext({
  holdingPok: [],
  addPok: (pokemon) => {},
  removePok: (id) => {},
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

  return (
    <PokemonContext.Provider value={{ pokemon: holdingPok, addPok, removePok }}>
      {children}
    </PokemonContext.Provider>
  );
};

export default ContextProvider;
