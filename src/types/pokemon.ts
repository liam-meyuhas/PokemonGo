export type Pokemon = {
  name: string;
  pokemonImage: string;
  types: string[];
  abilities: string[];
  height?:number,
  weight?:number
};

export type PokemonCollection = {
  name: string;
  isCaught: number;
  isFavorite: boolean;
  date: Date;
  nickName: string;
};
