import React from 'react';
import {HeaderProps} from './types/HeaderTypes';
import {Box, Image, Heading, HStack} from 'native-base';
import {ImageSourcePropType} from 'react-native';
import pokemonHeaderImage from '../../assets/images/pokemonHeaderImage.png';

const Header: React.FC<HeaderProps> = ({title = 'liam'}) => {
  return (
    <Box bg="rgb(50, 143, 173)" p={10} shadow={2}>
      <HStack justifyContent="space-between" alignItems="center" space={5}>
        <Heading size="md">שלום, {title}</Heading>
        <Image
          source={pokemonHeaderImage as ImageSourcePropType}
          alt="Pokemon Header"
          size="sm"
          width="40%"
        />
      </HStack>
    </Box>
  );
};
export default Header;
