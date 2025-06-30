import React, {useEffect, useRef, useState} from 'react';
import {Animated} from 'react-native';
import {Box, Image, Pressable} from 'native-base';
import {startAnimation} from './utils/catchPokemon.utils';
import CatchBall from '../../../../../../assets/images/CatchBall.png';
import {CatchButtonProps} from './types/catchButton.type';
import {usePokemonStore} from '../../../../../../story/usePokemonCollectoin';
import FastImage from 'react-native-fast-image';
import PokemonPopup from './components/PokemonPopup';

const CatchButton: React.FC<CatchButtonProps> = ({name, image}) => {
  const translateY = useRef(new Animated.Value(0)).current;
  const rotateValue = useRef(new Animated.Value(0)).current;

  const [isCaught, setIsCaught] = useState(false);
  const [showPopup, setShowPopup] = useState(false);

  const addPokemon = usePokemonStore(state => state.addPokemon);

  useEffect(() => {
    if (isCaught) {
      setShowPopup(true);
      const timer = setTimeout(() => {
        setShowPopup(false);
        setIsCaught(false);
      }, 3000);

      return () => clearTimeout(timer);
    }
  }, [isCaught]);

  const rotate = rotateValue.interpolate({
    inputRange: [0, 1, 2, 3, 4],
    outputRange: ['0deg', '360deg', '720deg', '1080deg', '1440deg'],
  });

  const handleAddPokemon = () => {
    addPokemon(name, image);
  };

  return (
    <>
      {showPopup && <PokemonPopup image={image} />}

      <Pressable
        onPress={() =>
          startAnimation(
            rotateValue,
            translateY,
            setIsCaught,
            name,
            image,
            handleAddPokemon,
          )
        }>
        <Box
          backgroundColor="#8A0303"
          borderRadius={30}
          height={120}
          width={50}
          mt={2}
          alignItems="center">
          <FastImage
            source={require('../../../../../../assets/gifs/PokemonLauncher.gif')}
            style={{width: 130, height: 70, transform: [{rotate: '180deg'}]}}
          />
          <Animated.View style={{transform: [{translateY}, {rotate}]}}>
            <Image source={CatchBall} alt="Catch Ball" height={12} width={12} />
          </Animated.View>
        </Box>
      </Pressable>
    </>
  );
};

export default CatchButton;
