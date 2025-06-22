import {Text} from 'native-base';
import React from 'react';

const PokemonName: React.FC<{name: string}> = ({name}) => {
  return (
    <>
      <Text
        position="absolute"
        top="20%"
        width="100%"
        textAlign="center"
        fontSize="5xl"
        fontWeight="extrabold"
        color="gray.300"
        opacity={0.1}>
        {name.toUpperCase()}
      </Text>
      <Text
        position="absolute"
        top="40%"
        width="100%"
        textAlign="center"
        fontSize="5xl"
        fontWeight="extrabold"
        color="gray.300"
        opacity={0.2}>
        {name.toUpperCase()}
      </Text>
      <Text
        position="absolute"
        top="60%"
        width="100%"
        textAlign="center"
        fontSize="5xl"
        fontWeight="extrabold"
        color="gray.300"
        opacity={0.4}>
        {name.toUpperCase()}
      </Text>

      <Text fontSize="2xl" fontWeight="bold" mt={1} color="#FFD300">
        {name.toUpperCase()}
      </Text>
    </>
  );
};
export default PokemonName;
