import {StyleSheet} from 'react-native';

export const style = StyleSheet.create({
  background: {
    flex: 1,
    borderRadius: 16,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
    shadowColor: '#000',
    shadowOpacity: 0.3,
    shadowOffset: {width: 0, height: 4},
    shadowRadius: 6,
    elevation: 6,
  },
  cardContainer: {
    width: 350,
    height: 550,
    borderRadius: 16,
    padding: 8,
  },
});
