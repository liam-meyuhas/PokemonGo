import {HStack, Text} from 'native-base';
import React from 'react';
import {Image} from 'react-native';
import {usePokemonStore} from '../../../../../../store/usePokemonCollectoin';
import PokemonBallLogo from '../../../../../../assets/images/PokemonBallLogo.png';

const PokemonCatchCount: React.FC<{name: string}> = ({name}) => {
  const pokemon = usePokemonStore(state => state.pokemons);

  const catchNumber = pokemon.find(p => p.name === name)?.isCaught;

  return (
    <HStack alignItems="center" justifyContent="center">
      <Image source={PokemonBallLogo} style={{height: 50, width: 50}} />
      <Text fontSize="2xl" color="white">
        {catchNumber}
      </Text>
    </HStack>
  );
};

export default PokemonCatchCount;
