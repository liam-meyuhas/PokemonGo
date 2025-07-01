import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {ROUTES} from './enums/navigation.enum';
import TabNavigator from './components/TabNavigator';
import EditNickName from '../../screens/EditNickName/EditNickName';

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
