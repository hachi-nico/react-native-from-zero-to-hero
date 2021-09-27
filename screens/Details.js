import React from 'react';
import {StatusBar, Text} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {styles} from './styles';

export const Details = ({route}) => {
  const {name} = route.params;
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor="whitesmoke" barStyle="dark-content" />
      <Text>Details Screen</Text>
      <Text>Hi {name}</Text>
    </SafeAreaView>
  );
};
