import {useColorModeValue} from 'native-base';

const useSearchStyle = () => {
  return {
    bgColor: useColorModeValue('#F5F5F5', 'gray.900'),
    textColor: useColorModeValue('black', 'white'),
    placeholderColor: useColorModeValue('#555', '#ccc'),
  };
};

export default useSearchStyle;
