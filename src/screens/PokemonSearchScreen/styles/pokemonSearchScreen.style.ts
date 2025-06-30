import {StyleSheet} from 'react-native';

export const style = StyleSheet.create({
  fadeBackground: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    height: '30%',
    zIndex: 10,
  },
  image: {
    height: '85%',
    width: '100%',
    overflow: 'hidden',
    marginTop: 10,
  },
  text: {
    position: 'absolute',
    fontSize: 15,
    color: 'white',
    top: '10%',
    left: '10%',
  },
});
