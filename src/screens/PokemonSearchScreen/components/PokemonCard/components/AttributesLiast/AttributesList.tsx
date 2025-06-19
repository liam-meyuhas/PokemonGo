import {Box, HStack, Text} from 'native-base';
import React from 'react';
import {AttributesListProps} from './types/AttributesListTypes';

const AttributesList: React.FC<AttributesListProps> = ({
  items,
  title,
  titleTextColor,
  itemTextColor,
  itemBgColor,
  listStyle,
  wrapperStyle,
}) => {
  return (
    <Box {...wrapperStyle}>
      <Text
        textAlign="center"
        fontSize="2xl"
        fontWeight="bold"
        mb={2}
        color={titleTextColor}>
        {title}
      </Text>
      <HStack {...listStyle}>
        {items.map(item => (
          <Box
            key={item}
            shadow={3}
            bg={itemBgColor}
            px={3}
            py={1.5}
            rounded="full">
            <Text fontSize="md" fontWeight="bold" color={itemTextColor}>
              {item}
            </Text>
          </Box>
        ))}
      </HStack>
    </Box>
  );
};

export default AttributesList;
