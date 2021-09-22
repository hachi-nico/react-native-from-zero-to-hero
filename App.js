import React, {useState} from 'react';
import {
  Button,
  FlatList,
  Keyboard,
  RefreshControl,
  SafeAreaView,
  SectionList,
  StyleSheet,
  Text,
  TextInput,
  TouchableWithoutFeedback,
  View,
} from 'react-native';

const App = () => {
  const [name, onChangeText] = useState('');

  const DismissKeyboard = ({children}) => (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      {children}
    </TouchableWithoutFeedback>
  );

  return (
    <DismissKeyboard>
      <SafeAreaView style={styles.container}>
        <Text style={styles.text}>Your Name is</Text>
        <TextInput
          style={styles.input}
          placeholder="insert your name here"
          onChangeText={onChangeText}
          value={name}
        />
        <View style={styles.button}>
          <Button title="submit" />
        </View>
      </SafeAreaView>
    </DismissKeyboard>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 30,
  },
  input: {
    width: 200,
    borderBottomWidth: 2,
    fontSize: 15,
    textAlign: 'center',
  },
  button: {
    marginTop: 20,
    width: 200,
  },
});

export default App;
