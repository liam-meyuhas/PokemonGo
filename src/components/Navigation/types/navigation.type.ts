import {PokemonCollection} from '../../../types/pokemon.type';
import {NavigationProp} from '@react-navigation/native';

type RootStackParamList = {
  EditNickName: {pokemon: PokemonCollection};
};

export type NavigationProps = NavigationProp<RootStackParamList>;
