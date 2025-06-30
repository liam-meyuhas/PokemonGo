import {PokemonCollection} from '../../../../../../../types/pokemon.type';

export type CaptureDateProps = {
  captureDate: Date;
};

export type PokemonNameProps = {
  pokemonName: string;
};

export type PokemonNickNameProps = {
  pokemon: PokemonCollection;
};

export type FrontCardProps = PokemonNickNameProps;
