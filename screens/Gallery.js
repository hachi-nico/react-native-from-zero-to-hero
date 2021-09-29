import React from 'react';
import {Text, Image} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {styles} from './styles';

export const Gallery = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Text>Gallery</Text>
      <Image
        source={{uri: 'https://placekitten.com/200/300'}}
        style={{width: 400, height: 300}}
      />
    </SafeAreaView>
  );
};
