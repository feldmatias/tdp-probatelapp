import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

const RadioButton = (props) => {
  return (
    <>
      <View style={[styles.container, props.style]}>
        <View style={styles.border}>
          {props.selected ? <View style={styles.selected} /> : null}
        </View>
        <Text style={styles.label}>{props.text}</Text>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
  },
  border: {
    height: 24,
    width: 24,
    borderRadius: 12,
    borderWidth: 2,
    borderColor: '#000',
    alignItems: 'center',
    justifyContent: 'center',
  },
  selected: {
    height: 12,
    width: 12,
    borderRadius: 6,
    backgroundColor: '#000',
  },
  label: {
    marginLeft: 12,
    fontSize: 16,
  },
});

export default RadioButton;
