import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import EditNickName from '../../screens/PokemonCollection/components/FlipCard/components/EditNickName/EditNickName';
import {ROUTES} from './enums/navigation.enum';
import TabNavigator from './components/TabNavigator';

const Stack = createNativeStackNavigator();

const Navigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name={ROUTES.TABS} component={TabNavigator} />
        <Stack.Screen name={ROUTES.EDIT_NICKNAME} component={EditNickName} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
export default Navigation;
