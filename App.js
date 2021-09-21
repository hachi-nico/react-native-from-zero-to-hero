/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  Button,
  Linking,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from 'react-native';

const App = () => {
  return (
    <SafeAreaView style={styles.body}>
      <View style={styles}>
        <Text style={styles.text}>Flex</Text>
        <Button
          title="My Github"
          onPress={() => Linking.openURL('https://github.com/hachi-nico')}
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  body: {
    flex: 1,
    backgroundColor: 'gray',
    padding: 10,
    alignItems: 'stretch',
    justifyContent: 'center',
  },
  text: {
    color: 'white',
    fontSize: 20,
    alignSelf: 'center',
  },
});

export default App;
