import React, {useState} from 'react';
import {CheckBox, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import Separator from '../../utils/Separator';
import {itemCategories} from '../items/catalog_items';

const CategoriesFilter = (props) => {
  const allCategories = itemCategories;
  const [selectedCategories, setSelectedCategories] = useState(props.initial);
  const [open, setOpen] = useState(false);

  const isSelected = (category) => selectedCategories.includes(category);
  const changeSelected = (category, selected) => {
    let categories = [...selectedCategories];
    if (selected) {
      categories.push(category);
      setSelectedCategories(categories);
    } else {
      categories = categories.filter((c) => c !== category);
      setSelectedCategories(categories);
    }
    props.onChange(categories);
  };

  const renderCheckbox = (category) => {
    return (
      <View style={styles.checkboxContainer}>
        <CheckBox
          value={isSelected(category)}
          onValueChange={(selected) => changeSelected(category, selected)}
          style={styles.checkbox}
          tintColors={{true: '#1c7dd6', false: '#1c7dd6'}}
        />
        <Text style={styles.label}>{category}</Text>
      </View>
    );
  };

  return (
    <>
      <View style={[styles.container, props.style]}>
        <TouchableOpacity onPress={() => setOpen(!open)}>
          <View style={styles.titleContainer}>
            <Text style={styles.categoriesTitle}>{text.categories}</Text>
            <Text style={styles.filterArrow}>{open ? 'Λ' : 'ᐯ'}</Text>
          </View>
        </TouchableOpacity>
        {open ? (
          <View>
            <Separator style={styles.separator} />
            {allCategories.map(renderCheckbox)}
          </View>
        ) : null}
      </View>
    </>
  );
};

const text = {
  categories: 'Categorías',
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 5,
    width: '100%',
  },
  categoriesTitle: {
    marginBottom: 5,
    fontSize: 20,
  },
  separator: {
    marginBottom: 5,
    width: 190,
  },
  checkboxContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  checkbox: {
    height: 34,
  },
  label: {
    fontSize: 18,
  },
  filterArrow: {
    height: '100%',
    justifyContent: 'flex-end',
    alignItems: 'center',
    fontSize: 18,
    color: 'gray',
    marginLeft: 65,
  },
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
  },
});

export default CategoriesFilter;
