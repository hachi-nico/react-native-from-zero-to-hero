import React from 'react';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import {Gallery, Article} from '../screens';

const Tab = createMaterialTopTabNavigator();
export const TopTabNavigator = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Gallery" component={Gallery} />
      <Tab.Screen name="Article" component={Article} />
    </Tab.Navigator>
  );
};
