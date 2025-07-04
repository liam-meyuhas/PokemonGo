import React from 'react';
import {HeaderProps} from './types/Header.style';
import {Box, Heading, HStack} from 'native-base';
import pokemonHeaderImage from '../../assets/images/pokemonHeaderImage.png';
import {Image} from 'react-native';

const Header: React.FC<HeaderProps> = ({title = 'liam'}) => {
  return (
    <Box p={3} color="black" bgColor="#FFFFF0">
      <HStack justifyContent="space-between" alignItems="center" space={5}>
        <Heading size="md">Hello, {title}</Heading>
        <Image
          source={pokemonHeaderImage}
          alt="Toggle Theme"
          style={{width: 100, height: 100, resizeMode: 'contain'}}
        />
      </HStack>
    </Box>
  );
};

export default Header;
