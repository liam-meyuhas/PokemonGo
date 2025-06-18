import React, {useRef} from 'react';
import {Box, VStack, Text, Pressable} from 'native-base';
import {Animated, ImageBackground} from 'react-native';
import {startAnimation} from './utils/pokemonAnimation';
import CatchButton from '../CatchButton/CatchButton';
import AttributesList from './components/AttributesList';
import {usePokemonCardStyles} from './hooks/usePokemonCardStyles';
import StarBackground from '../../assets/images/StarBackground.png';
import {Pokemon} from '../../types/pokemon';

const PokemonCard: React.FC<Pokemon> = ({
  name,
  PokemonImage,
  types,
  abilities,
}) => {
  const scaleValue = useRef(new Animated.Value(1)).current;
  const rotateValue = useRef(new Animated.Value(0)).current;

  const {
    bgColor,
    titleColor,
    typeTextColor,
    typeBgColor,
    abilityBoxBg,
    abilityTitleColor,
    abilityTextBg,
    abilityTextColor,
  } = usePokemonCardStyles();

  const rotate = rotateValue.interpolate({
    inputRange: [0, 1],
    outputRange: ['0deg', '360deg'],
  });

  return (
    <Box
      bg={bgColor}
      rounded="2xl"
      overflow="hidden"
      shadow={8}
      width="100%"
      height={550}
      mx="auto"
      my={6}>
      <VStack alignItems="center" flex={1}>
        <Pressable onPress={() => startAnimation(rotateValue, scaleValue)}>
          <ImageBackground source={StarBackground} resizeMode="cover">
            <Animated.Image
              source={{uri: PokemonImage}}
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

        <AttributesList
          items={types}
          title={'סוגים'}
          titleTextColor={titleColor}
          itemTextColor={typeTextColor}
          itemBgColor={typeBgColor}
          listStyle={{
            space: 3,
            flexWrap: 'wrap',
            justifyContent: 'center',
            mb: 4,
          }}
        />

        <AttributesList
          items={abilities}
          title={'יכולות'}
          titleTextColor={abilityTitleColor}
          itemTextColor={abilityTextColor}
          itemBgColor={abilityTextBg}
          listStyle={{
            space: 3,
            flexWrap: 'wrap',
            justifyContent: 'center',
          }}
          wrapperStyle={{
            bg: abilityBoxBg,
            px: 4,
            py: 3,
            rounded: '3xl',
            mb: 5,
            width: '90%',
            alignItems: 'center',
            shadow: 3,
          }}
        />

        <CatchButton name={name} image={PokemonImage} />
      </VStack>
    </Box>
  );
};

export default PokemonCard;
