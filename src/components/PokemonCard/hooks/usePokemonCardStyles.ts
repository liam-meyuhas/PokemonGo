import {useColorModeValue} from 'native-base';

export const usePokemonCardStyles = () => {
  return {
    bgColor: useColorModeValue('blueGray.50', 'blueGray.900'),
    titleColor: useColorModeValue('blue.700', 'blue.200'),
    typeTextColor: useColorModeValue('blue.900', 'blue.100'),
    typeBgColor: useColorModeValue('blue.200', 'blue.600'),
    abilityBoxBg: useColorModeValue('orange.100', 'orange.700'),
    abilityTitleColor: useColorModeValue('orange.800', 'orange.100'),
    abilityTextBg: useColorModeValue('orange.300', 'orange.500'),
    abilityTextColor: useColorModeValue('orange.900', 'orange.100'),
  };
};
