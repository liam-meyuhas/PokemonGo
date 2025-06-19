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
    borderWidth: 1,
    borderColor: 'black',
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
  cardFront: {
    backgroundColor: 'white',
  },
  cardBack: {
    backgroundColor: '#FFE0B2',
  },
  image: {
    width: 60,
    height: 60,
  },
});
