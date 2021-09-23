import React, {useState} from 'react';
import {Controller, useForm} from 'react-hook-form';
import {
  Button,
  Keyboard,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  TouchableWithoutFeedback,
  View,
} from 'react-native';

const App = () => {
  const {
    control,
    handleSubmit,
    reset,
    formState: {errors},
  } = useForm({mode: 'onBlur'});

  const [name, setName] = useState('');
  const onSubmit = ({nameInput}) => {
    setName(nameInput);
    reset();
  };
  const onClear = () => {
    setName('');
    reset();
  };

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
      <SafeAreaView style={styles.container}>
        <Text style={styles.text}>Your Name is {name}</Text>
        <Controller
          control={control}
          rules={{required: true}}
          name="nameInput"
          defaultValue=""
          render={({field: {onChange, value, onBlur}}) => (
            <TextInput
              style={styles.input}
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
              placeholder="insert your name here"
            />
          )}
        />
        {errors.nameInput && <Text>You must fill this form !!!</Text>}

        <View style={styles.button}>
          <Button title="submit" onPress={handleSubmit(onSubmit)} />
        </View>

        <View style={styles.button}>
          <Button title="clear" onPress={onClear} />
        </View>
      </SafeAreaView>
    </TouchableWithoutFeedback>
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
