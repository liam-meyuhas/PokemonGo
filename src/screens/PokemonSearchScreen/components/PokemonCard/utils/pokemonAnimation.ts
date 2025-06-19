import {Animated, Easing} from 'react-native';

export const startAnimation = (
  rotateValue: Animated.Value,
  scaleValue: Animated.Value,
): void => {
  Animated.sequence([
    Animated.parallel([
      Animated.timing(rotateValue, {
        toValue: 1,
        duration: 600,
        easing: Easing.ease,
        useNativeDriver: true,
      }),
      Animated.timing(scaleValue, {
        toValue: 1.5,
        duration: 600,
        easing: Easing.ease,
        useNativeDriver: true,
      }),
    ]),

    Animated.delay(500),

    Animated.parallel([
      Animated.timing(rotateValue, {
        toValue: 0,
        duration: 800,
        easing: Easing.ease,
        useNativeDriver: true,
      }),
      Animated.timing(scaleValue, {
        toValue: 1,
        duration: 800,
        easing: Easing.ease,
        useNativeDriver: true,
      }),
    ]),
  ]).start();
};
