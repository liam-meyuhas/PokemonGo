import {Controller, useForm} from 'react-hook-form';
import {Button, Image, TextInput, View} from 'react-native';
import {useNavigation, useRoute} from '@react-navigation/native';
import {usePokemonStore} from '../../../../../../story/usePokemonCollectoin';
import React from 'react';
import {PokemonCollection} from '../../../../../../types/pokemon.type';
import LinearGradient from 'react-native-linear-gradient';
import {Center, HStack, Pressable, Text, VStack} from 'native-base';
import Icon from 'react-native-vector-icons/FontAwesome';
import {FormData} from './types/editNickName.type';
import NewNickNameInput from './components/NewNickNameInput';

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

  const BACKGROUNDCOLORS = [
    '#17214A',
    '#1A2332',
    '#1184F6',
    '#172538',
    '#4E8FFB',
    '#1B2951',
    '#0967E3',
  ];
  const BORDERCOLORS = [
    '#70FFFE',
    '#042B83',
    '#0F87E3',
    '#11A0E7',
    '#0593A9',
    '#0560DA',
    '#78C7FB',
  ];

  return (
    <Center flex={1} bg="white">
      <LinearGradient
        colors={BORDERCOLORS}
        start={{x: 0, y: 0}}
        end={{x: 1, y: 1}}
        style={{
          width: 350,
          height: 550,
          borderRadius: 16,
          padding: 8,
        }}>
        <LinearGradient
          colors={BACKGROUNDCOLORS}
          start={{x: 0, y: 0}}
          end={{x: 1, y: 1}}
          style={{
            flex: 1,
            borderRadius: 16,
            justifyContent: 'center',
            alignItems: 'center',
            padding: 16,
            shadowColor: '#000',
            shadowOpacity: 0.3,
            shadowOffset: {width: 0, height: 4},
            shadowRadius: 6,
            elevation: 6,
          }}>
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
