import {HStack, Pressable, Text} from 'native-base';
import {useNavigation} from '@react-navigation/native';
import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import {PokemonNickNameProps} from '../types/PokemonCard.type';
import {ROUTES} from '../../../../../components/Navigation/enums/navigation.enum';
import {NavigationProps} from '../../../../../components/Navigation/types/navigation.type';

const PokemonNickName: React.FC<PokemonNickNameProps> = ({pokemon}) => {
  const navigation = useNavigation<NavigationProps>();

  return (
    <HStack alignItems="center" justifyContent="center" space={2}>
      <Text bold fontSize="lg" color="#0274DE" fontWeight="extrabold">
        {pokemon.nickName}
      </Text>
      <Pressable
        onPress={() => navigation.navigate(ROUTES.EDIT_NICKNAME, {pokemon})}>
        <Icon name="pencil" size={15} color="#62D2FE" />
      </Pressable>
    </HStack>
  );
};

export default PokemonNickName;
