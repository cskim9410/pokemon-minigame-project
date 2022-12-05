import classes from "./PokemonList.module.css";

const PokemonList = ({ pokemon, letgo }) => {
  return (
    <li key={Math.random()} className={classes.list}>
      <img src={pokemon.sprites.front_default} />
      <span>name: {pokemon.name}</span>
      <button onClick={() => letgo(pokemon.id)}>놓아주기</button>
      <button
        onClick={() => {
          console.log(
            pokemon.stats[1].stat.name,
            pokemon.stats[1]["base_stat"]
          );
        }}
      >
        상세보기
      </button>
    </li>
  );
};

export default PokemonList;
