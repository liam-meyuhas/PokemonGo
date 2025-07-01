import {Text} from 'native-base';
import React from 'react';
import {CaptureDateProps} from '../types/PokemonCard.type';

const CaptureDate: React.FC<CaptureDateProps> = ({captureDate}) => {
  return (
    <>
      <Text fontSize="xs" color="#93F0F2">
        תאריך תפיסה:
      </Text>
      <Text fontSize="xs" color="#93F0F2">
        {new Date(captureDate).toLocaleString()}
      </Text>
    </>
  );
};
export default CaptureDate;
