import Icon from 'react-native-vector-icons/Ionicons';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Header from '../../Header/Header';
import {ROUTES} from '../enums/navigation.enum';
import PokemonSearchScreen from '../../../screens/PokemonSearchScreen/PokemonSearchScreen';
import PokemonCollectionScreen from '../../../screens/PokemonCollection/PokemonCollection';

const TabNavigator = () => {
  const Tab = createBottomTabNavigator();

  return (
    <Tab.Navigator
      screenOptions={{
        header: () => <Header title="ליאם מיוחס" />,
        tabBarStyle: {
          backgroundColor: 'rgba(255, 255, 255, 0.2)',
          position: 'absolute',
          elevation: 0,
          borderTopWidth: 1,
          height: 100,
          paddingTop: 20,
        },
        tabBarActiveTintColor: 'black',
        tabBarInactiveTintColor: 'gray',
        tabBarShowLabel: false,
      }}>
      <Tab.Screen
        name={ROUTES.COLLECTION}
        component={PokemonCollectionScreen}
        options={{
          tabBarIcon: ({color}) => (
            <Icon name="cart-outline" size={30} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name={ROUTES.SEARCH}
        component={PokemonSearchScreen}
        options={{
          tabBarIcon: ({color}) => (
            <Icon name="search-outline" size={30} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default TabNavigator;
