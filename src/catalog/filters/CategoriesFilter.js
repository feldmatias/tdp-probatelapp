import React, {useState} from 'react';
import {CheckBox, StyleSheet, Text, View} from 'react-native';
import Separator from '../../utils/Separator';
import {itemCategories} from '../items/catalog_items';

const CategoriesFilter = (props) => {
  const allCategories = itemCategories;
  const [selectedCategories, setSelectedCategories] = useState([]);

  const isSelected = (category) => selectedCategories.includes(category);
  const changeSelected = (category, selected) => {
    let categories = [...selectedCategories];
    if (selected) {
      categories.push(category);
      setSelectedCategories(categories);
    } else {
      categories = categories.filter(c => c !== category);
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
        <Text style={styles.categoriesTitle}>{text.categories}</Text>
        <Separator style={styles.separator} />
        {allCategories.map(renderCheckbox)}
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
  },
  categoriesTitle: {
    marginBottom: 5,
    fontSize: 20,
  },
  separator: {
    marginBottom: 5,
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
});

export default CategoriesFilter;
