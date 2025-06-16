import React, {useRef} from 'react';
import {
  Box,
  VStack,
  HStack,
  Text,
  Pressable,
  useTheme,
  Stagger,
} from 'native-base';
import {Animated, ImageBackground} from 'react-native';
import {Pokemon} from '../../store/types/pokemon';
import {startAnimation} from './utils/pokemonAnimation';
import CatchButton from '../CatchButton/CatchButton';

const PokemonCard: React.FC<Pokemon> = ({name, image, types, abilities}) => {
  const theme = useTheme();

  const scaleValue = useRef(new Animated.Value(1)).current;
  const rotateValue = useRef(new Animated.Value(0)).current;

  const rotate = rotateValue.interpolate({
    inputRange: [0, 1],
    outputRange: ['0deg', '360deg'],
  });

  return (
    <Box
      bg={theme.colors.blueGray[50]}
      rounded="2xl"
      overflow="hidden"
      shadow={8}
      width="100%"
      height={550}
      mx="auto"
      my={6}>
      <VStack alignItems="center" flex={1}>
        <Pressable onPress={() => startAnimation(rotateValue, scaleValue)}>
          <ImageBackground
            source={require('../../assets/images/StarBackground.png')}
            resizeMode="cover">
            <Animated.Image
              source={{uri: image}}
              style={{
                width: 200,
                height: 200,
                transform: [{rotate}, {scale: scaleValue}],
              }}
            />
          </ImageBackground>
        </Pressable>

        <Text fontSize="3xl" fontWeight="bold" mt={1} color="orange.600">
          {name}
        </Text>
        <Text fontSize="2xl" fontWeight="bold" mt={1} mb={2} color="blue.700">
          סוגים
        </Text>
        <HStack space={3} flexWrap="wrap" justifyContent="center" mb={4}>
          {types.map(type => (
            <Box
              key={type}
              bg="blue.200"
              px={4}
              py={1.5}
              rounded="full"
              shadow={3}>
              <Text fontSize="md" fontWeight="bold" color="blue.900">
                {type}
              </Text>
            </Box>
          ))}
        </HStack>
        <Box
          bg="orange.100"
          px={4}
          py={3}
          rounded="3xl"
          mb={5}
          width="90%"
          alignItems="center"
          shadow={3}>
          <Text fontSize="2xl" fontWeight="bold" mb={2} color="orange.800">
            יכולות
          </Text>
          <HStack space={3} flexWrap="wrap" justifyContent="center">
            {abilities.map(ability => (
              <Stagger
                key={ability}
                visible
                initial={{opacity: 0, scale: 0.5}}
                animate={{opacity: 1, scale: 1}}
                exit={{opacity: 0, scale: 0.5}}>
                <Box shadow={3} bg="orange.300" px={3} py={1.5} rounded="full">
                  <Text fontSize="md" fontWeight="bold" color="orange.900">
                    {ability}
                  </Text>
                </Box>
              </Stagger>
            ))}
          </HStack>
        </Box>
        <CatchButton name={name} />
      </VStack>
    </Box>
  );
};

export default PokemonCard;
