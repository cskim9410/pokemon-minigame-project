import axios from "axios";

/**
 * @description 특정 포켓몬 정보 조회
 * @param {*} id 포켓몬 식별 아이디 number
 * @returns { name: '', id: 485, sprites: {}}
 */
export async function getPokemon(id) {
  const res = await axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`);
  const pokemon = res.data;
  return pokemon;
}

/**
 * @description 도감 목록 조회
 */
