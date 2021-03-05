import React, {useState} from 'react';
import {Modal, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import Separator from '../../utils/Separator';
import CategoriesFilter from './CategoriesFilter';
import SearchFilter from './SearchFilter';
import Button from 'react-native-bootstrap-buttons';
import ColorsFilter from './ColorsFilter';

const CatalogFilters = (props) => {
  const [showFilters, setShowFilters] = useState(false);
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [selectedColors, setSelectedColors] = useState([]);
  const [search, setSearch] = useState('');

  const onSearch = (text) => {
    setSearch(text);
    props.onSearch(text);
  };

  const onCategorySelected = (categories) => {
    setSelectedCategories(categories);
    props.onCategorySelected(categories);
  };

  const onColorSelected = (colors) => {
    setSelectedColors(colors);
    props.onColorSelected(colors);
  };

  return (
    <>
      <CatalogFiltersModal
        visible={showFilters}
        onFilter={() => setShowFilters(false)}
        onCategorySelected={onCategorySelected}
        onColorSelected={onColorSelected}
        onSearch={onSearch}
        initialSearch={search}
        initialCategories={selectedCategories}
        initialColors={selectedColors}
      />
      <View style={styles.container}>
        <Text style={styles.results}>
          {props.results || 0} {text.results}
        </Text>
        {props.disable ? null : <Text style={styles.results}>|</Text>}
        {props.disable ? null : (
          <TouchableOpacity onPress={() => setShowFilters(true)}>
            <Text style={[styles.results, styles.link]}>
              {text.filter}{' '}
              {showFilters ? '  ' : <Text style={styles.filterArrow}>ᐯ</Text>}
            </Text>
          </TouchableOpacity>
        )}
      </View>
    </>
  );
};

const CatalogFiltersModal = (props) => {
  return (
    <>
      <Modal
        transparent={true}
        visible={props.visible}
        onRequestClose={props.onFilter}>
        <View style={styles.modalContainer}>
          <View style={styles.modalView}>
            <CategoriesFilter
              onChange={props.onCategorySelected}
              initial={props.initialCategories}
            />
            <Separator style={styles.separator} />
            <ColorsFilter
              onChange={props.onColorSelected}
              initial={props.initialColors}
            />
            <Separator style={styles.separator} />
            <SearchFilter
              onChange={props.onSearch}
              initial={props.initialSearch}
            />
            <Separator style={styles.separator} />

            <Button
              labelStyle={styles.buttonLabel}
              containerStyle={styles.button}
              label={text.accept}
              buttonType="primary"
              rounded
              onPress={props.onFilter}
            />
          </View>
        </View>
      </Modal>
    </>
  );
};

const text = {
  results: 'resultados',
  filter: 'Filtrar',
  accept: 'Aplicar filtros',
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
  results: {
    fontSize: 18,
  },
  link: {
    fontSize: 20,
    color: '#1c7dd6',
    fontWeight: 'bold',
  },
  filterArrow: {
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: 14,
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'flex-end',
    marginTop: 130,
    marginRight: 35,
  },
  modalView: {
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 15,
    alignItems: 'flex-start',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
    minWidth: '60%',
  },
  separator: {
    width: 190,
    marginBottom: 10,
  },
  button: {
    width: '70%',
    justifyContent: 'center',
    alignItems: 'center',
    margin: 15,
    marginLeft: 25,
    marginBottom: 2,
  },
  buttonLabel: {
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default CatalogFilters;
