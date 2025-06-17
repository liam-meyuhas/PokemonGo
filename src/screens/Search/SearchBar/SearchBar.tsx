import {TextInput, Image} from 'react-native';
import React from 'react';
import {Box, useColorMode} from 'native-base';
import {styles} from '../styles/search';
import SearchBall from '../../../assets/images/SearchBall.png';
import DarkSearchBall from '../../../assets/images/DarkSearchBall.png';
import useSearchStyle from '../hooks/useSearchStyle';

const SearchBar: React.FC<{
  searchTerm: string;
  setSearchTerm: (searchTerm: string) => void;
}> = ({searchTerm, setSearchTerm}) => {
  const {colorMode} = useColorMode();
  const {placeholderColor, textColor} = useSearchStyle();

  return (
    <Box
      style={styles.container}
      px={4}
      pt={2}
      flexDirection="row"
      alignItems="center">
      <TextInput
        placeholder="חפש פוקימון"
        placeholderTextColor={placeholderColor}
        style={{
          ...styles.input,
          color: textColor,
        }}
        value={searchTerm}
        onChangeText={setSearchTerm}
      />
      {colorMode === 'light' ? (
        <Image source={SearchBall} alt="Search Icon" style={styles.img} />
      ) : (
        <Image source={DarkSearchBall} alt="Search Icon" style={styles.img} />
      )}
    </Box>
  );
};

export default SearchBar;
