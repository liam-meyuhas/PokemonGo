import {useColorModeValue} from 'native-base';

const useSearchStyle = () => {
  return {
    bgColor: useColorModeValue('white', 'gray.900'),
    textColor: useColorModeValue('black', 'white'),
    placeholderColor: useColorModeValue('#555', '#ccc'),
  };
};

export default useSearchStyle;
