import React, {useRef, useState} from 'react';
import {Animated} from 'react-native';
import {Button, Image, Pressable} from 'native-base';
import {startAnimation} from './utils/catchPokemon';
import usePokemon from '../../context/Pokemons/hooks/usePokemon';
import CatchBall from '../../assets/images/CatchBall.png';
const CatchButton: React.FC<{name: string}> = ({name}) => {
  const translateY = useRef(new Animated.Value(0)).current;
  const rotateValue = useRef(new Animated.Value(0)).current;
  const [isCaught, setIsCaught] = useState<boolean>(false);

  const {addPokemon} = usePokemon();

  const rotate = rotateValue.interpolate({
    inputRange: [0, 1, 2, 3, 4],
    outputRange: ['0deg', '360deg', '720deg', '1080deg', '1440deg'],
  });

  return (
    <Button bg="#9DD0FF" p={1} rounded="full">
      <Pressable
        onPress={() =>
          startAnimation(rotateValue, translateY, setIsCaught, name, addPokemon)
        }>
        <Animated.View style={{transform: [{translateY}, {rotate}]}}>
          <Image source={CatchBall} alt="Catch Ball" size="sm" />
        </Animated.View>
      </Pressable>
    </Button>
  );
};

export default CatchButton;
