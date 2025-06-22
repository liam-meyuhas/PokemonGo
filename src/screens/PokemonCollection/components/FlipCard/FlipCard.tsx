import React, {useRef, useState} from 'react';
import {
  Animated,
  Image,
  ImageBackground,
  Pressable,
  StyleSheet,
  View,
} from 'react-native';
import FrontCard, {styles2} from './components/FrontCard';
import BackCard from './components/BackCard';
import {styles} from './styles/flipCardStyles';
import {FlipCardProps} from './types/flipCardTypes';
import {Box} from 'native-base';
import {usePokemonStore} from '../../../../story/usePokemonCollectoin';
import Icon from 'react-native-vector-icons/FontAwesome';

const FlipCard: React.FC<FlipCardProps> = ({pokemon}) => {
  const flipAnimation = useRef(new Animated.Value(0)).current;
  const [flipped, setFlipped] = useState(false);

  const flipCard = () => {
    Animated.timing(flipAnimation, {
      toValue: flipped ? 0 : 180,
      duration: 300,
      useNativeDriver: true,
    }).start(() => setFlipped(!flipped));
  };

  const frontInterpolate = flipAnimation.interpolate({
    inputRange: [0, 180],
    outputRange: ['0deg', '180deg'],
  });

  const backInterpolate = flipAnimation.interpolate({
    inputRange: [0, 180],
    outputRange: ['180deg', '360deg'],
  });

  return (
    <Pressable onPress={flipCard}>
      <Box style={styles.cardContainer}>
        <Animated.View
          style={[
            styles2.cardContainer,
            {transform: [{rotateY: frontInterpolate}]},
          ]}>
          <FrontCard pokemon={pokemon} />
        </Animated.View>

        <Animated.View
          style={[styles.cardBack, {transform: [{rotateY: backInterpolate}]}]}>
          <BackCard />
        </Animated.View>
      </Box>
    </Pressable>
  );
};

export default FlipCard;
