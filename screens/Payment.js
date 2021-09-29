import React from 'react';
import {Text} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {styles} from './styles';

export const Payment = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Text>Payment Screen</Text>
    </SafeAreaView>
  );
};
