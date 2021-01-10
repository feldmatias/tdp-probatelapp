import React from 'react';
import {Image, SafeAreaView, ScrollView, StyleSheet, View} from 'react-native';

import Button from 'react-native-bootstrap-buttons';

const LandingPage = ({navigation}) => {
  return (
    <>
      <SafeAreaView style={styles.container}>
        <ScrollView contentInsetAdjustmentBehavior="automatic">
          <View style={styles.logoContainer}>
            <Image style={styles.logo} source={require('../logo/logo.png')} />
          </View>

          <View style={styles.body}>
            <Button
              labelStyle={styles.buttonLabel}
              containerStyle={styles.button}
              label={text.button}
              buttonType="primary"
              rounded
              onPress={() => navigation.navigate('Catalog')}
            />
          </View>
        </ScrollView>
      </SafeAreaView>
    </>
  );
};

const text = {
  button: 'Probador virtual',
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#e9fafb',
    height: '100%',
  },
  logoContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    width: '80%',
    height: undefined,
    aspectRatio: 0.9,
    margin: 20,
    marginTop: 50,
  },
  body: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 70,
  },
  button: {
    width: '70%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonLabel: {
    fontSize: 25,
  },
});

export default LandingPage;
