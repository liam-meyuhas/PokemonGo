import React, {useRef, useState} from 'react';
import {Animated} from 'react-native';
import {Button, Image, Pressable} from 'native-base';
import {startAnimation} from './utils/catchPokemon';
import CatchBall from '../../../../../../assets/images/CatchBall.png';
import {CatchButtonProps} from './types/catchButtonTypes';
import {usePokemonStore} from '../../../../../../story/usePokemonCollectoin';

const CatchButton: React.FC<CatchButtonProps> = ({name}) => {
  const translateY = useRef(new Animated.Value(0)).current;
  const rotateValue = useRef(new Animated.Value(0)).current;
  const [isCaught, setIsCaught] = useState<boolean>(false);

  const addPokemon = usePokemonStore(state => state.addPokemon);

  const rotate = rotateValue.interpolate({
    inputRange: [0, 1, 2, 3, 4],
    outputRange: ['0deg', '360deg', '720deg', '1080deg', '1440deg'],
  });

  const handleAddPokemon = () => {
    addPokemon(name);
  };

  return (
    <Button bg="#9DD0FF" p={1} rounded="full">
      <Pressable
        onPress={() =>
          startAnimation(
            rotateValue,
            translateY,
            setIsCaught,
            name,
            handleAddPokemon,
          )
        }>
        <Animated.View style={{transform: [{translateY}, {rotate}]}}>
          <Image source={CatchBall} alt="Catch Ball" size="sm" />
        </Animated.View>
      </Pressable>
    </Button>
  );
};

export default CatchButton;
