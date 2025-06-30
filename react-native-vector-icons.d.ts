declare module '*.png' {
  const content: number;
  export default content;
}

declare module 'react-native-vector-icons/FontAwesome' {
  import {Icon} from 'react-native-vector-icons/Icon';
  const FontAwesome: typeof Icon;
  export default FontAwesome;
}

declare module 'react-native-vector-icons/Ionicons' {
  import {Icon} from 'react-native-vector-icons/Icon';
  const Ionicons: typeof Icon;
  export default Ionicons;
}

declare module 'react-native-vector-icons/FontAwesome5' {
  import {Icon} from 'react-native-vector-icons/Icon';
  const FontAwesome5: typeof Icon;
  export default FontAwesome5;
}

declare module 'react-native-vector-icons/Feather' {
  import {Icon} from 'react-native-vector-icons/Icon';
  const Feather: typeof Icon;
  export default Feather;
}
