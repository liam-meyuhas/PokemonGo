import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  cardContainer: {
    width: 160,
    height: 220,
    marginBottom: 16,
  },
  card: {
    position: 'absolute',
    width: 160,
    height: 220,
    padding: 12,
    borderRadius: 12,
    borderWidth: 6,
    borderColor: '#70FFFE',
    backgroundColor: 'white',
    backfaceVisibility: 'hidden',
    shadowColor: '#000',
    shadowOpacity: 0.2,
    shadowOffset: {width: 0, height: 2},
    shadowRadius: 4,
    elevation: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  cardBack: {
    position: 'absolute',
    width: 160,
    height: 220,
    borderRadius: 12,
    backfaceVisibility: 'hidden',
    overflow: 'hidden',
    shadowColor: '#000',
    shadowOpacity: 0.2,
    shadowOffset: {width: 0, height: 2},
    shadowRadius: 4,
    elevation: 5,
  },

  cardFront: {
    backgroundColor: 'white',
  },
  image: {
    width: 60,
    height: 60,
  },
});
