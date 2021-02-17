import React, {useState} from 'react';
import {Modal, StyleSheet, Text, TouchableOpacity, View} from 'react-native';

const CatalogFiltersModal = (props) => {
  return (
    <>
      <Modal
        transparent={true}
        visible={props.visible}
        onRequestClose={props.onFilter}>
        <View style={styles.modalContainer}>
          <View style={styles.modalView}>
            <Text style={styles.modalText}>Hello World!</Text>
            <TouchableOpacity
              style={[styles.button, styles.buttonClose]}
              onPress={props.onFilter}>
              <Text style={styles.textStyle}>Hide Modal</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </>
  );
};

const CatalogFilters = (props) => {
  const [showFilters, setShowFilters] = useState(false);
  return (
    <>
      <CatalogFiltersModal
        visible={showFilters}
        onFilter={() => setShowFilters(false)}
      />
      <View style={styles.container}>
        <Text style={styles.results}>
          {props.results || 0} {text.results}
        </Text>
        <Text style={styles.results}>|</Text>
        <TouchableOpacity onPress={() => setShowFilters(true)}>
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
  modalContainer: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'flex-end',
    marginTop: 110,
    marginRight: 15,
  },
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  buttonOpen: {
    backgroundColor: '#F194FF',
  },
  buttonClose: {
    backgroundColor: '#2196F3',
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
  },
});

export default CatalogFilters;
