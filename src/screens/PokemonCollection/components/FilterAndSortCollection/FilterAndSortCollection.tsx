import React from 'react';
import HeartIcon from 'react-native-vector-icons/FontAwesome';
import BookIcon from 'react-native-vector-icons/FontAwesome5';
import ArrowIcon from 'react-native-vector-icons/Feather';
import {HStack, Pressable} from 'native-base';
import {FilterAndSortCollectionProps} from './types/FilterAndSortCollection.type';

const FilterAndSortCollection: React.FC<FilterAndSortCollectionProps> = ({
  sortByNickname,
  setSortByNickname,
  showOnlyFavorites,
  setShowOnlyFavorites,
  sortByDate,
  setSortByDate,
}) => {
  return (
    <HStack alignItems="center" justifyContent="center" space={2}>
      <Pressable onPress={() => setSortByNickname(prev => !prev)}>
        <BookIcon
          size={24}
          name={sortByNickname ? 'book' : 'book-open'}
          color="#62D2FE"
        />
      </Pressable>
      <Pressable onPress={() => setShowOnlyFavorites(prev => !prev)}>
        <HeartIcon
          size={24}
          name={showOnlyFavorites ? 'heart' : 'heart-o'}
          color="#62D2FE"
        />
      </Pressable>
      <Pressable
        onPress={() =>
          setSortByDate(prev => (prev === 'desc' ? null : 'desc'))
        }>
        <ArrowIcon
          name={sortByDate ? 'arrow-down' : 'arrow-up'}
          size={18}
          color="#62D2FE"
        />
      </Pressable>
    </HStack>
  );
};

export default FilterAndSortCollection;
