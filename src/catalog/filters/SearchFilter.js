import React, {useState} from 'react';
import {Image, StyleSheet, TextInput, View} from 'react-native';

const SearchFilter = (props) => {

  const onChangeText = (text) => {
    props.onChange(text);
  };

  return (
    <>
      <View style={styles.container}>
        <View style={styles.iconContainer}>
          <Image source={require('./search.png')} style={styles.icon} />
        </View>

        <TextInput
          style={styles.input}
          placeholder={text.placeholder}
          underlineColorAndroid="transparent"
          onChangeText={onChangeText}
          defaultValue={props.initial}
        />
      </View>
    </>
  );
};

const text = {
  placeholder: 'Filtrar...',
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderWidth: 2,
    borderColor: '#1c7dd6',
    height: 40,
    borderRadius: 5,
    margin: 2,
    width: 160,
  },
  iconContainer: {
    backgroundColor: 'lightgrey',
    borderRadius: 5,
    height: '100%',
  },
  icon: {
    padding: 10,
    margin: 5,
    height: 25,
    width: 25,
    resizeMode: 'stretch',
    alignItems: 'center',
  },
  input: {
    flex: 1,
    fontSize: 15,
  },
});

export default SearchFilter;
