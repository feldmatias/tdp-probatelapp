import React from 'react';
import {
  FlatList,
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  TouchableHighlight,
} from 'react-native';
import Colors from 'react-native/Libraries/NewAppScreen/components/Colors';

const CatalogItem = (props) => {
  return (
    <TouchableHighlight onPress={props.onPress} underlayColor="transparent">
      <View style={styles.itemContainer}>
        <Image style={styles.itemImage} source={props.item.image} />
        <View style={styles.itemData}>
          <Text style={styles.itemTitle}>{props.item.key}</Text>
          <Text style={styles.itemPrice}>${props.item.price}</Text>
        </View>
      </View>
    </TouchableHighlight>
  );
};

const Catalog = ({navigation}) => {
  return (
    <>
      <SafeAreaView style={styles.container}>
        <View style={styles.titleContainer}>
          <Image style={styles.clothesIcon} source={require('./clothes.png')} />
          <Text style={styles.title}>{text.title}</Text>
        </View>
        <FlatList
          data={catalogItems}
          renderItem={({item}) => (
            <CatalogItem
              onPress={() => navigation.navigate('Probador')}
              item={item}
            />
          )}
        />
      </SafeAreaView>
    </>
  );
};

const catalogItems = [
  {key: 'Remera roja', image: require('./clothes.png'), price: '123.00'},
  {key: 'Pantalón Verde', image: require('../logo/logo.png'), price: '500.00'},
  {key: 'Buzo Puma', image: require('../logo/logo.png'), price: '208.50'},
  {key: 'Bermuda de Jean', image: require('../logo/logo.png'), price: '999.99'},
  {key: 'Jean', image: require('../logo/logo.png'), price: '100.00'},
  {key: 'Joel', image: require('../logo/logo.png'), price: '568.00'},
  {key: 'John', image: require('../logo/logo.png'), price: '724.00'},
  {key: 'Jilldddd', image: require('../logo/logo.png'), price: '123.00'},
];

export const selectedCatalogItem = catalogItems[0];

const text = {
  title: 'Elegí la prenda para probarte:',
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#e9fafb',
    height: '100%',
  },
  titleContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    margin: 20,
    flexDirection: 'row',
  },
  clothesIcon: {
    width: 60,
    height: 60,
  },
  title: {
    fontSize: 22,
    marginLeft: 10,
  },
  itemContainer: {
    margin: 10,
    padding: 10,
    flexDirection: 'row',
    borderRadius: 10,
    borderWidth: 1.5,
    borderColor: Colors.black,
    backgroundColor: Colors.white,
    justifyContent: 'center',
    alignItems: 'center',
  },
  itemImage: {
    width: '40%',
    height: undefined,
    aspectRatio: 1,
  },
  itemData: {
    width: '40%',
    marginLeft: 20,
  },
  itemTitle: {
    fontSize: 27,
    textAlign: 'center',
  },
  itemPrice: {
    fontSize: 21,
    textAlign: 'center',
    marginTop: 15,
  },
});

export default Catalog;
