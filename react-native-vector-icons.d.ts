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
