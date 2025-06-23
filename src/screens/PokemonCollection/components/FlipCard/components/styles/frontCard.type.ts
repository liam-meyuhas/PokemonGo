import {StyleSheet} from 'react-native';

export const frontCardStyles = StyleSheet.create({
  cardContainer: {
    position: 'absolute',
    width: 160,
    height: 220,
    borderRadius: 12,
    overflow: 'hidden',
    backfaceVisibility: 'hidden',
  },
  borderWrapper: {
    flex: 1,
    borderRadius: 12,
    padding: 8,
  },
  innerCard: {
    flex: 1,
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 12,
    shadowColor: '#000',
    shadowOpacity: 0.2,
    shadowOffset: {width: 0, height: 2},
    shadowRadius: 4,
    elevation: 5,
  },
});
