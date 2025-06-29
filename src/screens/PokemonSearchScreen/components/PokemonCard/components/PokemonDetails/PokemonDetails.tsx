import React from 'react';
import {Text, VStack} from 'native-base';


type PokemonDetailsProp = {
  title: string;
  description: string;
  style?: string;
};
const PokemonDetails: React.FC<PokemonDetailsProp> = ({
  title,
  description,
  style,
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
