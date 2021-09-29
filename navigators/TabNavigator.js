import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Home, Payment, Profile} from '../screens';
import Icon from 'react-native-ionicons';
import {TopTabNavigator} from '.';

const Tab = createBottomTabNavigator();
export const TabNavigator = () => {
  return (
    <Tab.Navigator screenOptions={{tabBarActiveTintColor: 'black'}}>
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: ({focused}) => (
            <Icon
              name="home"
              size={focused ? 36 : 30}
              color={focused ? 'black' : 'gray'}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Content"
        component={TopTabNavigator}
        options={{
          tabBarIcon: ({focused}) => (
            <Icon
              name="camera"
              size={focused ? 36 : 30}
              color={focused ? 'black' : 'gray'}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Payment"
        component={Payment}
        options={{
          tabBarIcon: ({focused}) => (
            <Icon
              name="wallet"
              size={focused ? 40 : 30}
              color={focused ? 'black' : 'gray'}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
};
