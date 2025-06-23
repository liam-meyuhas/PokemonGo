import {Box, Text, VStack} from 'native-base';
import React from 'react';
import {FrontCardProps} from './types/frontCardTypes';
import Icon from 'react-native-vector-icons/FontAwesome';
import {Image, Pressable} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {usePokemonStore} from '../../../../../story/usePokemonCollectoin';
import {frontCardStyles} from './styles/frontCard.type';

const FrontCard: React.FC<FrontCardProps> = ({pokemon}) => {
  const isFavorite = usePokemonStore(state => state.isFavorite);

  return (
    <LinearGradient
      colors={[
        '#70FFFE',
        '#042B83',
        '#0F87E3',
        '#11A0E7',
        '#0593A9',
        '#0560DA',
        '#78C7FB',
      ]}
      start={{x: 0, y: 0}}
      end={{x: 1, y: 1}}
      style={frontCardStyles.borderWrapper}>
      <LinearGradient
        colors={[
          '#17214A',
          '#1A2332',
          '#1184F6',
          '#172538',
          '#4E8FFB',
          '#1B2951',
          '#0967E3',
        ]}
        start={{x: 0, y: 0}}
        end={{x: 1, y: 1}}
        style={frontCardStyles.innerCard}>
        <VStack space={1} alignItems="center">
          <Text bold fontSize="lg" color="#0274DE" fontWeight="extrabold">
            {pokemon.nickName}
          </Text>

          <Box>
            <Image source={{uri: pokemon.image}} height={50} width={100} />
          </Box>

          <Text fontSize="lg" color="#0A8CC8" fontWeight="extrabold">
            {pokemon.name}
          </Text>

          <Text
            fontSize="lg"
            color="#1DD3CC"
            fontWeight="extrabold"
            position="absolute"
            top="42.5%">
            {pokemon.name}
          </Text>
          <Pressable onPress={() => isFavorite(pokemon.name)}>
            <Icon
              name={pokemon.isFavorite ? 'heart' : 'heart-o'}
              color="#62D2FE"
              size={24}
            />
          </Pressable>

          <Text fontSize="xs" color="#93F0F2">
            תאריך תפיסה:
          </Text>
          <Text fontSize="xs" color="#93F0F2">
            {new Date(pokemon.date).toLocaleString()}
          </Text>
        </VStack>
      </LinearGradient>
    </LinearGradient>
  );
};

export default FrontCard;
