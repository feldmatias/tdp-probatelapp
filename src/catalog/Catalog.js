import React, {useState} from 'react';
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
import {catalogItems, recommendedItems} from './items/catalog_items';
import CatalogFilters from './filters/CatalogFilters';
import Separator from '../utils/Separator';

const Catalog = ({route, navigation}) => {
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [search, setSearch] = useState('');
  const {isRecommender} = route.params;

  const allItems = () => {
    return isRecommender ? recommendedItems : catalogItems;
  };

  const goToProbador = () => {
    navigation.navigate('Probador', {
      isRecommender: isRecommender,
    });
  };

  const filterItems = () => {
    let items = [...allItems()];
    if (selectedCategories.length > 0) {
      items = items.filter((item) =>
        selectedCategories.includes(item.category),
      );
    }
    if (search !== '') {
      items = items.filter((item) =>
        item.key.toLowerCase().includes(search.toLowerCase()),
      );
    }
    return items;
  };

  return (
    <>
      <SafeAreaView style={styles.container}>
        <View style={styles.titleContainer}>
          {isRecommender ? null : (
            <Image
              style={styles.clothesIcon}
              source={require('./clothes.png')}
            />
          )}
          <Text style={styles.title}>
            {isRecommender ? text.recommender : text.title}
          </Text>
        </View>
        <View style={styles.filters}>
          <CatalogFilters
            results={filterItems().length}
            onCategorySelected={setSelectedCategories}
            onSearch={setSearch}
            disable={isRecommender}
          />
        </View>
        <Separator style={styles.separator} />
        <FlatList
          data={filterItems()}
          renderItem={({item}) => (
            <CatalogItem onPress={goToProbador} item={item} />
          )}
        />
      </SafeAreaView>
    </>
  );
};

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

const text = {
  title: 'Elegí la prenda para probarte:',
  recommender: 'Nuestras recomendaciones:',
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
  filters: {
    margin: 10,
    marginTop: 0,
  },
  separator: {
    margin: 5,
    marginHorizontal: 15,
  },
});

export default Catalog;
