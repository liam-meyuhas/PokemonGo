import React from 'react';
import {Image} from 'react-native';

const BackCard = () => {
  return (
    <Image
      source={require('../../../../../assets/images/BackPokemonCard.png')}
      style={{
        width: '100%',
        height: '100%',
      }}
      resizeMode="cover"
    />
  );
};

export default BackCard;
