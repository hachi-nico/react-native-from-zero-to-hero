/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useState} from 'react';
import {
  RefreshControl,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';

const App = () => {
  const [data, setData] = useState([
    {id: 1, item: 'fi'},
    {id: 2, item: 'fa'},
    {id: 3, item: 'fo'},
    {id: 4, item: 'fu'},
    {id: 5, item: 'bu'},
  ]);
  const [refreshing, setRefreshing] = useState(false);

  const onRefresh = () => {
    setRefreshing(true);
    setData([...data, {id: new Date(), item: 'new item'}]);
    setRefreshing(false);
  };

  return (
    <SafeAreaView style={styles.outerContainer}>
      <ScrollView
        refreshControl={
          <RefreshControl
            refreshing={refreshing}
            onRefresh={onRefresh}
            colors={['red', 'blue']}
          />
        }>
        {data
          .map(obj => (
            <View key={obj.id} style={styles.container}>
              <Text style={styles.text}>{obj.item}</Text>
            </View>
          ))
          .reverse()}
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  outerContainer: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 10,
  },
  container: {
    padding: 50,
    backgroundColor: 'violet',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 40,
  },
  text: {
    fontSize: 50,
  },
});

export default App;
