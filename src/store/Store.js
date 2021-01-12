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

const StoreItem = (props) => {
  return (
    <TouchableHighlight onPress={props.onPress} underlayColor="transparent">
      <View style={styles.itemContainer}>
        <Image style={styles.itemImage} source={props.item.image} />
        <Text style={styles.itemTitle}>{props.item.key}</Text>
      </View>
    </TouchableHighlight>
  );
};

const Store = ({navigation}) => {
  return (
    <>
      <SafeAreaView style={styles.container}>
        <Text style={styles.title}>{text.title}</Text>
        <FlatList
          data={catalogItems}
          renderItem={({item}) => (
            <StoreItem
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
  {
    key: 'Remera roja',
    image: {
      uri:
        'https://statics.glamit.com.ar/media/catalog/product/cache/8/image/9df78eab33525d08d6e5fb8d27136e95/g/c/gcr601bl.jpg',
    },
  },
  {key: 'Pantalón Verde', image: require('../logo/logo.png')},
  {
    key: 'Buzo Puma',
    image: {
      uri:
        'https://www.puraimagendigital.com/2178/remera-adulto-unisex-gris-melange.jpg',
    },
  },
  {
    key: 'Bermuda de Jean',
    image: {
      uri:
        'https://www.doiteargentina.com.ar/wp-content/uploads/2019/05/doite-remera-termica-thermoactive-turquesa-mujer-01.jpg',
    },
  },
  {
    key: 'Jean',
    image: {
      uri:
        'https://d3295hraz5fimx.cloudfront.net/16864-product_lg/remera-de-ninos-summer.jpg',
    },
  },
  {key: 'Joel', image: require('../logo/logo.png')},
  {key: 'John', image: require('../logo/logo.png')},
  {
    key: 'Jilliandddddddddddd',
    image: {
      uri:
        'https://statics.glamit.com.ar/media/catalog/product/cache/8/image/9df78eab33525d08d6e5fb8d27136e95/g/c/gcr601bl.jpg',
    },
  },
];

const text = {
  title: 'Elegí la prenda para probarte:',
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#e9fafb',
    height: '100%',
  },
  title: {
    fontSize: 22,
    margin: 20,
    textAlign: 'center',
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
  itemTitle: {
    width: '40%',
    marginLeft: 20,
    fontSize: 30,
    textAlign: 'center',
  },
});

export default Store;
