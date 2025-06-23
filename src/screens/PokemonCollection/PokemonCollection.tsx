import React, {useState} from 'react';
import {usePokemonStore} from '../../story/usePokemonCollectoin';
import {Box, HStack, ScrollView, Switch, Text} from 'native-base';
import FlipCard from './components/FlipCard/FlipCard';
import {ImageBackground, TextInput} from 'react-native';
import {Button} from 'native-base';

const PokemonScreen = () => {
  const [search, setSearch] = useState('');
  const [showOnlyFavorites, setShowOnlyFavorites] = useState(false);
  const [sortByNicknameAsc, setSortByNicknameAsc] = useState(true);

  const pokemons = usePokemonStore(state => state.pokemons);

  const filteredPokemons = pokemons
    .filter(pokemon =>
      pokemon.nickName.toLowerCase().includes(search.toLowerCase()),
    )
    .filter(pokemon => !showOnlyFavorites || pokemon.isFavorite)
    .sort((a, b) => {
      return sortByNicknameAsc
        ? a.nickName.localeCompare(b.nickName)
        : b.nickName.localeCompare(a.nickName);
    });

  return (
    <ScrollView>
      <Box flex={1} alignItems="center">
        <ImageBackground
          source={require('../../assets/images/PokemonCollectionBackground.png')}
          style={{height: '100%', width: '100%'}}>
          <TextInput
            placeholder="חפש לפי כינוי"
            value={search}
            onChangeText={setSearch}
            style={{
              backgroundColor: 'white',
              padding: 10,
              borderRadius: 8,
              margin: 10,
            }}
          />
          <Button
            mt={2}
            mx={4}
            onPress={() => setSortByNicknameAsc(prev => !prev)}
            colorScheme="rose">
            מיין לפי כינוי ({sortByNicknameAsc ? 'א-ת' : 'ת-א'})
          </Button>
          <HStack space={2} alignItems="center" ml={4} mt={2}>
            <Text fontSize="md">הצג רק מועדפים</Text>
            <Switch
              size="md"
              colorScheme="rose"
              isChecked={showOnlyFavorites}
              onToggle={() => setShowOnlyFavorites(prev => !prev)}
            />
          </HStack>
          <HStack
            ml={5}
            p={4}
            flexWrap="wrap"
            justifyContent="flex-start"
            space={4}>
            {filteredPokemons.map(pokemon => (
              <FlipCard key={pokemon.name} pokemon={pokemon} />
            ))}
          </HStack>
        </ImageBackground>
      </Box>
    </ScrollView>
  );
};

export default PokemonScreen;
