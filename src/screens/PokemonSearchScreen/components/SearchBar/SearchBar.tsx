import {TextInput, Image} from 'react-native';
import React from 'react';
import {Box} from 'native-base';
import SearchBall from '../../../../assets/images/SearchBall.png';
import {styles} from './styles/searchBar.style';
import {SearchBarProps} from './types/searchBar.type';

const SearchBar: React.FC<SearchBarProps> = ({
  searchTerm,
  setSearchTerm,
  fetchPokemon,
}) => {
  return (
    <Box
      style={styles.container}
      px={4}
      pt={2}
      flexDirection="row"
      alignItems="center">
      <TextInput
        placeholder="חפש פוקימון"
        style={{
          ...styles.input,
        }}
        value={searchTerm}
        onChangeText={setSearchTerm}
        onSubmitEditing={() => fetchPokemon(searchTerm)}
      />
      <Image source={SearchBall} alt="Search Icon" style={styles.img} />
    </Box>
  );
};

export default SearchBar;
