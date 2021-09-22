import React, {useState} from 'react';
import {
  FlatList,
  RefreshControl,
  SafeAreaView,
  SectionList,
  StyleSheet,
  Text,
  View,
} from 'react-native';

const App = () => {
  // const [data, setData] = useState([{item: 'fi'}, {item: 'fa'}]);
  const [data, setData] = useState([
    {
      item: 'cat',
      data: ['kitty', 'garfield'], // key name must named 'data'
    },
  ]);
  const [refreshing, setRefreshing] = useState(false);

  const onRefresh = () => {
    setRefreshing(true);
    setData([...data, {item: 'new item'}]);
    setRefreshing(false);
  };

  // dont use anonymous func for performance reason
  // desturcture obj must named 'item' and 'section'
  const renderItem = ({item}) => <Text style={styles.text}>{item}</Text>;
  const renderSectionHeader = ({section}) => (
    <View style={styles.container}>
      <Text style={styles.text}>{section.item}</Text>
    </View>
  );

  return (
    <SafeAreaView>
      {/* <FlatList
        keyExtractor={(item, index) => index.toString()}
        data={data}
        renderItem={renderItem}
        refreshControl={
          <RefreshControl
            refreshing={refreshing}
            onRefresh={onRefresh}
            colors={['yellow', 'green']}
          />
        }
      /> */}
      <SectionList
        keyExtractor={(item, index) => item + index}
        sections={data}
        renderItem={renderItem}
        renderSectionHeader={renderSectionHeader}
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }
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
