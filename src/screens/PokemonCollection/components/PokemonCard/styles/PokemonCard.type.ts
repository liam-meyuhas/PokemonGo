import {StyleSheet} from 'react-native';

export const pokemonCardStyles = StyleSheet.create({
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
