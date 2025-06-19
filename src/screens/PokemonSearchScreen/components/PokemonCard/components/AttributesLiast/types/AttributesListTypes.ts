import {Box, HStack} from 'native-base';

export type AttributesListProps = {
  items: string[];
  title: string;
  titleTextColor: string;
  itemTextColor: string;
  itemBgColor: string;
  listStyle?: Partial<React.ComponentProps<typeof HStack>>;
  wrapperStyle?: Partial<React.ComponentProps<typeof Box>>;
};
