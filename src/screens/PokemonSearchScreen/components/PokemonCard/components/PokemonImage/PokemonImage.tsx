import {Pressable} from 'native-base';
import React, {useRef} from 'react';
import {Animated, ImageBackground} from 'react-native';
import {startAnimation} from '../../utils/pokemonAnimation.utils';
import StarBackground from '../../../../../../assets/images/StarBackground.png';

const PokemonImage: React.FC<{pokemonImage: string}> = ({pokemonImage}) => {
  const scaleValue = useRef(new Animated.Value(1)).current;
  const rotateValue = useRef(new Animated.Value(0)).current;

  const rotate = rotateValue.interpolate({
    inputRange: [0, 1],
    outputRange: ['0deg', '360deg'],
  });

  return (
    <Pressable onPress={() => startAnimation(rotateValue, scaleValue)}>
      <ImageBackground source={StarBackground}>
        <Animated.Image
          source={{uri: pokemonImage}}
          style={{
            width: 200,
            height: 200,
            transform: [{rotate}, {scale: scaleValue}],
          }}
        />
      </ImageBackground>
    </Pressable>
  );
};

export default PokemonImage;
