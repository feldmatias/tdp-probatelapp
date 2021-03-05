import React, {useState} from 'react';
import {CheckBox, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import Separator from '../../utils/Separator';
import {itemColors} from '../items/catalog_items';

const ColorsFilter = (props) => {
  const allColors = itemColors;
  const [selectedColors, setSelectedColors] = useState(props.initial);
  const [open, setOpen] = useState(false);

  const isSelected = (color) => selectedColors.includes(color);
  const changeSelected = (color, selected) => {
    let colors = [...selectedColors];
    if (selected) {
      colors.push(color);
      setSelectedColors(colors);
    } else {
      colors = colors.filter((c) => c !== color);
      setSelectedColors(colors);
    }
    props.onChange(colors);
  };

  const renderCheckbox = (color) => {
    return (
      <View style={styles.checkboxContainer}>
        <CheckBox
          value={isSelected(color)}
          onValueChange={(selected) => changeSelected(color, selected)}
          style={styles.checkbox}
          tintColors={{true: '#1c7dd6', false: '#1c7dd6'}}
        />
        <Text style={styles.label}>{color}</Text>
      </View>
    );
  };

  return (
    <>
      <View style={[styles.container, props.style]}>
        <TouchableOpacity onPress={() => setOpen(!open)}>
          <View style={styles.titleContainer}>
            <Text style={styles.categoriesTitle}>{text.colors}</Text>
            <Text style={styles.filterArrow}>{open ? 'Λ' : 'ᐯ'}</Text>
          </View>
        </TouchableOpacity>
        {open ? (
          <View>
            <Separator style={styles.separator} />
            {allColors.map(renderCheckbox)}
          </View>
        ) : null}
      </View>
    </>
  );
};

const text = {
  colors: 'Colores',
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
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: 18,
    color: 'gray',
    marginLeft: 93,
  },
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});

export default ColorsFilter;
