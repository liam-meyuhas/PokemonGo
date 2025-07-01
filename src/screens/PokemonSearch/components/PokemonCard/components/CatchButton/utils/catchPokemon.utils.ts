import {useMemo} from 'react';
import {Animated, Easing} from 'react-native';

const isCaught = (): boolean => {
  return Math.floor(Math.random() * 2) === 1;
};

export const startAnimation = (
  rotateValue: Animated.Value,
  translateY: Animated.Value,
  setIsCaught: (boolean: boolean) => void,
  name: string,
  image: string,
  handleAddPokemon: (name: string, image: string) => void,
): void => {
  rotateValue.setValue(0);
  Animated.sequence([
    Animated.parallel([
      Animated.timing(translateY, {
        toValue: -400,
        duration: 1000,
        easing: Easing.out(Easing.ease),
        useNativeDriver: true,
      }),
      Animated.timing(rotateValue, {
        toValue: 1,
        duration: 1000,
        easing: Easing.linear,
        useNativeDriver: true,
      }),
    ]),

    Animated.timing(rotateValue, {
      toValue: 7,
      duration: 2000,
      easing: Easing.linear,
      useNativeDriver: true,
    }),

    Animated.parallel([
      Animated.timing(translateY, {
        toValue: 0,
        duration: 0,
        easing: Easing.in(Easing.ease),
        useNativeDriver: true,
      }),
      Animated.timing(rotateValue, {
        toValue: 4,
        duration: 1000,
        easing: Easing.linear,
        useNativeDriver: true,
      }),
    ]),
  ]).start(() => {
    rotateValue.setValue(0);
    const IsCaught = isCaught();
    if (IsCaught) {
      handleAddPokemon(name, image);
    }
    setIsCaught(IsCaught);
  });
};
