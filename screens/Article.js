import React from 'react';
import {Text} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {styles} from './styles';

export const Article = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Text>Article Screen</Text>
    </SafeAreaView>
  );
};
