import React, {useState} from 'react';
import {usePokemonStore} from '../../story/usePokemonCollectoin';
import {Box, HStack, ScrollView} from 'native-base';
import FlipCard from './components/FlipCard/FlipCard';
import {ImageBackground, TextInput} from 'react-native';
import FilterAndSortCollection from './components/FilterAndSortCollection/FilterAndSortCollection';
import {SortDirection} from './components/FilterAndSortCollection/types/FilterAndSortCollection.type';
import {filterAndSortPokemons} from './components/FilterAndSortCollection/utils/FilterAndSortCollection.utils';

const PokemonCollectionScreen = () => {
  const [search, setSearch] = useState('');
  const [showOnlyFavorites, setShowOnlyFavorites] = useState(false);
  const [sortByNickname, setSortByNickname] = useState(false);
  const [sortByDate, setSortByDate] = useState<SortDirection>(null);

  const pokemons = usePokemonStore(state => state.pokemons);

  const filteredPokemons = filterAndSortPokemons(
    pokemons,
    search,
    showOnlyFavorites,
    sortByNickname,
    sortByDate,
  );

  return (
    <ImageBackground
      source={require('../../assets/images/PokemonCollectionBackground.png')}
      style={{height: '100%', width: '100%'}}>
      <ScrollView>
        <Box flex={1} alignItems="center">
          <HStack p={2} alignItems="center" justifyContent="flex-end">
            <FilterAndSortCollection
              showOnlyFavorites={showOnlyFavorites}
              setShowOnlyFavorites={setShowOnlyFavorites}
              sortByNickname={sortByNickname}
              setSortByNickname={setSortByNickname}
              sortByDate={sortByDate}
              setSortByDate={setSortByDate}
            />

            <TextInput
              placeholder="חפש לפי כינוי"
              value={search}
              onChangeText={setSearch}
              style={{
                width: '70%',
                backgroundColor: 'white',
                padding: 10,
                borderRadius: 8,
                margin: 10,
              }}
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
        </Box>
      </ScrollView>
    </ImageBackground>
  );
};

export default PokemonCollectionScreen;
