import {Text, VStack} from 'native-base';
import React from 'react';
import {FrontCardProps} from './types/frontCardTypes';
import Icon from 'react-native-vector-icons/FontAwesome';

const FrontCard: React.FC<FrontCardProps> = ({pokemon}) => {
  return (
    <VStack space={2} alignItems="center">
      <Text bold fontSize="lg" color="#333">
        {pokemon.nickName}
      </Text>

      <Text fontSize="md" color="gray.700">
        {pokemon.name}
      </Text>

      <Icon name="heart-o" size={24} />

      <Text fontSize="xs" color="gray.600">
        תאריך תפיסה:
      </Text>
      <Text fontSize="xs" color="gray.800">
        {new Date(pokemon.date).toLocaleString()}
      </Text>
    </VStack>
  );
};

export default FrontCard;
