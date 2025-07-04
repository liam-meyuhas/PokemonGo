import {HStack, Text, VStack} from 'native-base';
import React from 'react';
import PokemonDetails from '../PokemonDetails/PokemonDetails';
import {Image} from 'react-native';
import {PokemonStatesSectionProp} from './types/pokemonStatesSection.type';
import PokemonPower from '../../../../../../assets/images/PokemonPower.png';

const PokemonStatsSection: React.FC<PokemonStatesSectionProp> = ({
  height,
  weight,
}) => {
  return (
    <HStack
      alignItems="center"
      justifyContent="center"
      space={10}
      mt={4}
      ml={5}>
      <PokemonDetails title="Height" description={`${height}m`} />
      <VStack alignItems="center" justifyContent="center">
        <Text fontSize="lg" color="#8A0303">
          Power
        </Text>
        <Image source={PokemonPower} style={{height: 40, width: 40}} />
      </VStack>
      <PokemonDetails title="Weight" description={`${weight}Kg`} />
    </HStack>
  );
};

export default PokemonStatsSection;
