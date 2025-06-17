// import React from 'react';
// import {HeaderProps} from './types/HeaderTypes';
// import {Box, Image, Heading, HStack, useColorMode, Button} from 'native-base';
// import {ImageSourcePropType} from 'react-native';
// import pokemonHeaderImage from '../../assets/images/pokemonHeaderImage.png';

// const Header: React.FC<HeaderProps> = ({title = 'liam'}) => {
//   const {colorMode, toggleColorMode} = useColorMode();
//   return (
//     <Box bg="rgb(50, 143, 173)" p={10} shadow={2}>
//       <HStack justifyContent="space-between" alignItems="center" space={5}>
//         {/* <Heading size="md">שלום, {title}</Heading>
//         <Image
//           source={pokemonHeaderImage as ImageSourcePropType}
//           alt="Pokemon Header"
//           size="sm"
//           width="40%"
//         /> */}
//         <Button onPress={toggleColorMode}>
//           Switch to {colorMode === 'light' ? 'Dark' : 'Light'} Mode
//         </Button>
//       </HStack>
//     </Box>
//   );
// };
// export default Header;
import React from 'react';
import {HeaderProps} from './types/headerTypes';
import {
  Box,
  Heading,
  HStack,
  useColorMode,
  useColorModeValue,
  Pressable,
} from 'native-base';
import pokemonHeaderImage from '../../assets/images/pokemonHeaderImage.png';
import pokemonHeaderImageDarkMode from '../../assets/images/PokemonDarkMode.png';
import {Image} from 'react-native';
import {styles} from './styles/headerStyles';

const Header: React.FC<HeaderProps> = ({title = 'liam'}) => {
  const {colorMode, toggleColorMode} = useColorMode();

  const bgColor = useColorModeValue('primary.500', 'primary.700');

  return (
    <Box bg={bgColor} p={5} shadow={2}>
      <HStack justifyContent="space-between" alignItems="center" space={5}>
        <Heading size="md" color="white">
          שלום, {title}
        </Heading>
        <Pressable onPress={toggleColorMode}>
          {colorMode === 'light' ? (
            <Image
              source={pokemonHeaderImage}
              alt="Toggle Theme"
              style={{width: 100, height: 100, resizeMode: 'contain'}}
            />
          ) : (
            <Image
              source={pokemonHeaderImageDarkMode}
              alt="Toggle Theme"
              style={styles.img}
            />
          )}
        </Pressable>
      </HStack>
    </Box>
  );
};

export default Header;
