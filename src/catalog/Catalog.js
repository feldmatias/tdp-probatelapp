import React from 'react';
import {FlatList, SafeAreaView, StyleSheet, Text} from 'react-native';

const CatalogItem = (props) => {
  return <Text>{props.item.key}</Text>;
};

const Catalog = ({navigation}) => {
  return (
    <>
      <SafeAreaView style={styles.container}>
        <FlatList
          data={catalogItems}
          renderItem={({item}) => <CatalogItem item={item} />}
        />
      </SafeAreaView>
    </>
  );
};

const catalogItems = [
  {key: 'Devin'},
  {key: 'Dan'},
  {key: 'Dominic'},
  {key: 'Jackson'},
  {key: 'James'},
  {key: 'Joel'},
  {key: 'John'},
  {key: 'Jillian'},
];

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#e9fafb',
    height: '100%',
  },
});

export default Catalog;
