import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';

const CatalogFilters = (props) => {
  return (
    <>
      <View style={styles.container}>
        <Text style={styles.results}>
          {props.results || 0} {text.results}
        </Text>
        <Text style={styles.results}>|</Text>
        <TouchableOpacity>
          <Text style={[styles.results, styles.link]}>
            {text.filter} <Text style={styles.filterArrow}>ᐯ</Text>
          </Text>
        </TouchableOpacity>
      </View>
    </>
  );
};

const text = {
  results: 'resultados',
  filter: 'Filtrar',
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
});

export default CatalogFilters;
