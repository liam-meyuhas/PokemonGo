import React, {useRef, useState} from 'react';
import {Animated, Pressable} from 'react-native';
import FrontCard from './components/FrontCard/FrontCard';
import {styles} from './styles/flipCard.style';
import {FlipCardProps} from './types/flipCard.type';
import {Box} from 'native-base';

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
        {/* <Animated.View
          style={[
            frontCardStyles.cardContainer,
            {transform: [{rotateY: frontInterpolate}]},
          ]}>
          <FrontCard pokemon={pokemon} />
        </Animated.View>

        <Animated.View
          style={[styles.cardBack, {transform: [{rotateY: backInterpolate}]}]}>
          <BackCard />
        </Animated.View> */}
        <FrontCard pokemon={pokemon} />
      </Box>
    </Pressable>
  );
};

export default FlipCard;
