import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Details} from './screens';
import {TabNavigator, TopTabNavigator} from './navigators';

const Stack = createNativeStackNavigator();
export const Routes = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="TabNavigator"
          component={TabNavigator}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="TopTabNavigator"
          component={TopTabNavigator}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Details"
          component={Details}
          options={{headerShadowVisible: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
