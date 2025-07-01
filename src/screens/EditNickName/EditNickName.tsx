import {useForm} from 'react-hook-form';
import {Button, Image} from 'react-native';
import {useNavigation, useRoute} from '@react-navigation/native';
import React from 'react';
import LinearGradient from 'react-native-linear-gradient';
import {Center, HStack, Text, VStack} from 'native-base';
import Icon from 'react-native-vector-icons/FontAwesome';
import {FormData} from './types/editNickName.type';
import NewNickNameInput from './components/NewNickNameInput';
import {style} from './styles/editNickName.style';
import {
  BACKGROUNDCOLORS,
  BORDERCOLORS,
} from '../constants/PokemonCard.constants';
import {PokemonCollection} from '../../types/pokemon.type';
import {usePokemonStore} from '../../store/usePokemonCollectoin';

const EditNickName = () => {
  const changeNickName = usePokemonStore(state => state.changeNickName);
  const navigation = useNavigation();
  const route = useRoute();

  const {pokemon} = route.params as {pokemon: PokemonCollection};

  const {
    control,
    handleSubmit,
    formState: {errors},
  } = useForm<FormData>({
    defaultValues: {
      username: pokemon.nickName,
    },
  });

  const onSubmit = (data: {username: string}) => {
    changeNickName(data.username, pokemon.name);
    navigation.goBack();
  };

  return (
    <Center flex={1} bg="white">
      <LinearGradient
        colors={BORDERCOLORS}
        start={{x: 0, y: 0}}
        end={{x: 1, y: 1}}
        style={style.cardContainer}>
        <LinearGradient
          colors={BACKGROUNDCOLORS}
          start={{x: 0, y: 0}}
          end={{x: 1, y: 1}}
          style={style.background}>
          <VStack space={3} alignItems="center">
            <Text fontSize="lg" color="white">
              {pokemon.name}
            </Text>
            <Image
              source={{uri: pokemon.image}}
              height={200}
              width={200}
              alt="pokemon"
            />
            <Icon
              name={pokemon.isFavorite ? 'heart' : 'heart-o'}
              color="#62D2FE"
              size={44}
            />
            <VStack alignItems="center" justifyContent="center" space={2}>
              <Text fontSize="lg" color="#93F0F2">
                Capture Date:
              </Text>
              <Text fontSize="lg" color="#93F0F2">
                {new Date(pokemon.date).toLocaleString()}
              </Text>
            </VStack>

            <NewNickNameInput control={control} errors={errors} />
            <HStack space={3}>
              <Button title="Submit" onPress={handleSubmit(onSubmit)} />
              <Button title="Cencel" onPress={() => navigation.goBack()} />
            </HStack>
          </VStack>
        </LinearGradient>
      </LinearGradient>
    </Center>
  );
};

export default EditNickName;
