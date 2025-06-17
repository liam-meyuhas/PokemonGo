import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomWidth: 1,
    marginHorizontal: 20,
    paddingBottom: 4,
    marginTop: 20,
  },
  input: {
    flex: 1,
    fontSize: 18,
    color: '#000',
    textAlign: 'right',
  },
  icon: {
    marginLeft: 10,
  },
  img: {
    width: 50,
    height: 50,
    resizeMode: 'contain',
  },
});
