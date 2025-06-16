import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Shop from '../../screens/Shop';
import Search from '../../screens/Search/Search';
import Icon from 'react-native-vector-icons/Ionicons';
import {Image} from 'native-base';

const Navigation = () => {
  const Tab = createBottomTabNavigator();

  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={{
          headerShown: false,
          tabBarStyle: {backgroundColor: '#eee', height: 100, paddingTop: 20},
          tabBarActiveTintColor: '#000',
          tabBarInactiveTintColor: '#888',
          tabBarShowLabel: false,
        }}>
        <Tab.Screen
          name="Shop"
          component={Shop}
          options={{
            tabBarIcon: ({color}) => (
              <Icon name="cart-outline" size={30} color={color} />
            ),
          }}
        />
        <Tab.Screen
          name="Search"
          component={Search}
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
