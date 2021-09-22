/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useState} from 'react';
import {
  FlatList,
  RefreshControl,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';

const App = () => {
  const [data, setData] = useState([
    {item: 'fi'},
    {item: 'fa'},
    {item: 'fo'},
    {item: 'fu'},
    {item: 'bu'},
  ]);
  const [refreshing, setRefreshing] = useState(false);

  const onRefresh = () => {
    setRefreshing(true);
    setData([...data, {item: 'new item'}]);
    setRefreshing(false);
  };

  const renderItem = ({item}) => (
    <View style={styles.container}>
      <Text style={styles.text}>{item.item}</Text>
    </View>
  );

  return (
    <SafeAreaView>
      <FlatList
        refreshControl={
          <RefreshControl
            refreshing={refreshing}
            onRefresh={onRefresh}
            colors={['red', 'blue']}
          />
        }
        keyExtractor={(item, index) => index.toString()}
        data={data}
        renderItem={renderItem}
      />
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
