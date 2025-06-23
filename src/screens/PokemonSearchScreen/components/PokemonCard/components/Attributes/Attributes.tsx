import React from 'react';
import {Text, VStack} from 'native-base';
import {AttributesProp} from './types/attributes.type';

const Attributes: React.FC<AttributesProp> = ({array, title}) => {
  return (
    <VStack alignItems="center" justifyContent="flex-end">
      <Text fontSize="lg" color="#8A0303" mb={3}>
        {title}
      </Text>
      {array.map(item => (
        <Text fontSize="lg" color="#8A0303" fontWeight="bold">
          {item}
        </Text>
      ))}
    </VStack>
  );
};

export default Attributes;
