import {useColorModeValue} from 'native-base';

const useHeaderStyles = () => {
  return {
    tabBarBgColor: useColorModeValue('#f0f0f0', '#1a1a1a'),
    tabBarActiveColor: useColorModeValue('#000', '#fff'),
    tabBarInactiveColor: useColorModeValue('#888', '#aaa'),
  };
};

export default useHeaderStyles;
