import React from 'react';
import {Text, VStack} from 'native-base';
import {PokemonDetailsProps} from './types/pokemonDetails.type';

const PokemonDetails: React.FC<PokemonDetailsProps> = ({
  title,
  description,
}) => {
  return (
    <VStack alignItems="center" justifyContent="center">
      <Text fontSize="lg" color="#8A0303">
        {title}
      </Text>
      <Text fontSize="3xl" color="#8A0303">
        {description}
      </Text>
    </VStack>
  );
};

export default PokemonDetails;
