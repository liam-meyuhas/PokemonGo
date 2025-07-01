import React, {useState} from 'react';
import {usePokemonStore} from '../../store/usePokemonCollectoin';
import {Box, HStack, ScrollView} from 'native-base';
import {ImageBackground, TextInput} from 'react-native';
import FilterAndSortCollection from './components/FilterAndSortCollection/FilterAndSortCollection';
import {SortDirection} from './components/FilterAndSortCollection/types/FilterAndSortCollection.type';
import {filterAndSortPokemons} from './components/FilterAndSortCollection/utils/FilterAndSortCollection.utils';
import LinearGradient from 'react-native-linear-gradient';
import {FADEBACKGROUNG} from './constants/pokemonCollection.constants';
import {style} from './styles/pokemonCollection.style';
import PokemonCard from './components/PokemonCard/PokemonCard';
import PokemonCollectionBackground from '../../assets/images/PokemonCollectionBackground.png';

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
    <ImageBackground source={PokemonCollectionBackground} style={style.image}>
      <LinearGradient
        colors={FADEBACKGROUNG}
        start={{x: 0, y: 0}}
        end={{x: 0, y: 0.27}}
        style={style.fadeBacground}
        pointerEvents="none"
      />
      <ScrollView>
        <Box flex={1} alignItems="center" mt={5}>
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
              style={style.input}
            />
          </HStack>

          <HStack
            ml={5}
            p={4}
            flexWrap="wrap"
            justifyContent="flex-start"
            space={4}>
            {filteredPokemons.map(pokemon => (
              <Box key={pokemon.name} style={style.cardContainer}>
                <PokemonCard pokemon={pokemon} />
              </Box>
            ))}
          </HStack>
        </Box>
      </ScrollView>
    </ImageBackground>
  );
};

export default PokemonCollectionScreen;
