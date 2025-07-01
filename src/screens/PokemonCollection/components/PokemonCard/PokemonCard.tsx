import {VStack} from 'native-base';
import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import {Image, Pressable} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {pokemonCardStyles} from './styles/PokemonCard.type';
import {
  BACKGROUNDCOLORS,
  BORDERCOLORS,
} from '../../../constants/PokemonCard.constants';
import {PokemonCardProps} from './types/PokemonCard.type';
import PokemonName from './components/PokemonName';
import CaptureDate from './components/CaptureDate';
import PokemonNickName from './components/PokemonNickName';
import {usePokemonStore} from '../../../../store/usePokemonCollectoin';

const PokemonCard: React.FC<PokemonCardProps> = ({pokemon}) => {
  const isFavorite = usePokemonStore(state => state.isFavorite);

  return (
    <LinearGradient
      colors={BORDERCOLORS}
      start={{x: 0, y: 0}}
      end={{x: 1, y: 1}}
      style={pokemonCardStyles.borderWrapper}>
      <LinearGradient
        colors={BACKGROUNDCOLORS}
        start={{x: 0, y: 0}}
        end={{x: 1, y: 1}}
        style={pokemonCardStyles.innerCard}>
        <VStack space={1} alignItems="center">
          <PokemonNickName pokemon={pokemon} />

          <Image source={{uri: pokemon.image}} height={50} width={100} />

          <PokemonName pokemonName={pokemon.name} />
          <Pressable onPress={() => isFavorite(pokemon.name)}>
            <Icon
              name={pokemon.isFavorite ? 'heart' : 'heart-o'}
              color="#62D2FE"
              size={24}
            />
          </Pressable>

          <CaptureDate captureDate={pokemon.date} />
        </VStack>
      </LinearGradient>
    </LinearGradient>
  );
};

export default PokemonCard;
