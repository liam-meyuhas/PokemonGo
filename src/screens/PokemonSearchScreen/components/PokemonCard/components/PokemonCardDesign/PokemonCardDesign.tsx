import React from 'react';
import {Box} from 'native-base';

const PokemonCardDesign = () => {
  return (
    <>
      <Box
        style={{
          position: 'absolute',
          opacity: 0.5,
          height: 130,
          width: 130,
          backgroundColor: '#8A0303',
          top: '40%',
          right: '2%',
          borderRadius: 200,
        }}
      />
      <Box
        style={{
          position: 'absolute',
          opacity: 0.5,
          height: 70,
          width: 70,
          backgroundColor: '#8A0303',
          top: '35%',
          right: '2%',
          borderRadius: 200,
        }}
      />
      <Box
        style={{
          position: 'absolute',
          opacity: 1,
          height: 70,
          width: 70,
          backgroundColor: '#FB992D',
          top: '25%',
          left: '5%',
          borderRadius: 200,
        }}
      />
      <Box
        style={{
          position: 'absolute',
          opacity: 0.7,
          height: 320,
          width: 320,
          backgroundColor: '#FF4500',
          top: '6%',
          left: '10%',
          borderRadius: 200,
        }}
      />
      <Box
        style={{
          position: 'absolute',
          opacity: 0.6,
          height: 170,
          width: 170,
          backgroundColor: '#FB992D',
          borderRadius: 100,
        }}
      />
    </>
  );
};

export default PokemonCardDesign;
