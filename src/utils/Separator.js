import React from 'react';
import {StyleSheet, View} from 'react-native';

const Separator = (props) => {
  return (
    <>
      <View style={styles.lineStyle} />
    </>
  );
};

const styles = StyleSheet.create({
  lineStyle: {
    borderWidth: 0.5,
    borderColor: 'lightgray',
    margin: 5,
    marginHorizontal: 15,
  },
});

export default Separator;
