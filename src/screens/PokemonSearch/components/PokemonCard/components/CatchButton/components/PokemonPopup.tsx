import React from 'react';
import {Box, HStack, Image, Text} from 'native-base';
import {PokemonPopupProps} from '../types/catchButton.type';

const PokemonPopup: React.FC<PokemonPopupProps> = ({image}) => {
  return (
    <Box
      position="absolute"
      top="-150%"
      right="10%"
      p={3}
      backgroundColor="rgba(0,0,0,0.7)"
      alignItems="center"
      zIndex={10}>
      <HStack
        backgroundColor="#fff"
        alignItems="center"
        justifyContent="center"
        space={2}
        p={6}
        borderRadius={10}>
        <Text color="#000" fontWeight="bold" fontSize="lg">
          successfully caught
        </Text>
        <Image source={{uri: image}} height={100} width={100} />
      </HStack>
    </Box>
  );
};

export default PokemonPopup;
