import {SafeAreaView, StyleSheet, Text} from 'react-native';
import React from 'react';

const Probador = ({navigation}) => {
  return (
    <>
      <SafeAreaView style={styles.container}>
        <Text>probador virtual</Text>
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#e9fafb',
    height: '100%',
  },
});

export default Probador;
