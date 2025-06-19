import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/Ionicons';
import {useColorModeValue} from 'native-base';
import useHeaderStyles from './hooks/useHeaderStyles';
import PokemonCollection from '../../screens/PokemonCollection/PokemonCollection';
import PokemonSearchScreen from '../../screens/PokemonSearchScreen/PokemonSearchScreen';

const Navigation = () => {
  const Tab = createBottomTabNavigator();
  const {tabBarBgColor, tabBarActiveColor, tabBarInactiveColor} =
    useHeaderStyles();

  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={{
          headerShown: false,
          tabBarStyle: {
            backgroundColor: tabBarBgColor,
            height: 100,
            paddingTop: 20,
            borderTopColor: useColorModeValue('#ccc', '#333'),
            borderTopWidth: 1,
          },
          tabBarActiveTintColor: tabBarActiveColor,
          tabBarInactiveTintColor: tabBarInactiveColor,
          tabBarShowLabel: false,
        }}>
        <Tab.Screen
          name="PokemonCollection"
          component={PokemonCollection}
          options={{
            tabBarIcon: ({color}) => (
              <Icon name="cart-outline" size={30} color={color} />
            ),
          }}
        />
        <Tab.Screen
          name="PokemonSearchScreen"
          component={PokemonSearchScreen}
          options={{
            tabBarIcon: ({color}) => (
              <Icon name="search-outline" size={30} color={color} />
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
