export interface Pokemon {
  name: string;
  image: string;
  types: string[];
  abilities: string[];
}

export interface PokemonAPIResponse {
  results: Pokemon[];
}

export interface PokemonStore {
  pokemons: Pokemon[];
  loading: boolean;
  error: string | null;
  fetchAll: () => Promise<void>;
}
