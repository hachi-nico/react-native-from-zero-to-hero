import React from 'react';
import {Text, Button} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {styles} from './styles';

export const Home = ({navigation}) => {
  return (
    <SafeAreaView style={styles.container}>
      <Text>Home Screen</Text>
      <Button
        title="Details"
        onPress={() => navigation.navigate('Details', {name: 'Nico'})}
      />
    </SafeAreaView>
  );
};
