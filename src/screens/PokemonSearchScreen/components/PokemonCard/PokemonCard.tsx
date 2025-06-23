import React from 'react';
import {Box, VStack, HStack, Text} from 'native-base';
import {usePokemonCardStyles} from './hooks/usePokemonCardStyles';
import CatchButton from './components/CatchButton/CatchButton';
import {Pokemon} from '../../../../types/pokemon';
import PokemonDetails from './components/PokemonDetails/PokemonDetails';
import PokemonCardDesign from './components/PokemonCardDesign/PokemonCardDesign';
import PokemonName from './components/PokemonName/PokemonName';
import PokemonStatsSection from './components/PokemonStatsSection/PokemonStatsSection';
import PokemonCatchCount from './components/PokemonCatchCount/PokemonCatchCount';
import PokemonImage from './components/PokemonImage/PokemonImage';
import Attributes from './components/Attributes/Attributes';

const PokemonCard: React.FC<Pokemon> = ({
  name,
  pokemonImage,
  types,
  abilities,
  weight,
  height,
}) => {
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
      <PokemonCardDesign />

      <VStack alignItems="center" flex={1} mt={10}>
        <PokemonImage pokemonImage={pokemonImage} />

        <VStack alignItems="center" justifyContent="center">
          <PokemonCatchCount name={name} />
          <PokemonName name={name} />
        </VStack>

        <PokemonStatsSection height={height} weight={weight} />

        <HStack
          alignItems="center"
          justifyContent="space-evenly"
          width="100%"
          ml={10}>
          <Attributes array={types} title="Types" />
          <CatchButton name={name} image={pokemonImage} />
          <Attributes array={abilities} title="Abilities" />
        </HStack>
      </VStack>
    </Box>
  );
};
export default PokemonCard;
