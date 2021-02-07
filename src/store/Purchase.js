import React from 'react';
import {
  Image,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';

import Button from 'react-native-bootstrap-buttons';
import {selectedCatalogItem} from '../catalog/Catalog';
import RadioButton from '../utils/RadioButton';

const Purchase = ({navigation}) => {
  return (
    <>
      <SafeAreaView style={styles.container}>
        <ScrollView contentInsetAdjustmentBehavior="automatic">
          <Text style={styles.confirmText}>{text.confirm}</Text>
          <View style={styles.logoContainer}>
            <Image style={styles.logo} source={selectedCatalogItem.image} />
            <Text style={styles.itemName}>{selectedCatalogItem.key}</Text>
            <Text style={styles.itemPrice}>${selectedCatalogItem.price}</Text>
          </View>

          <View style={styles.radioGroup}>
            <RadioButton style={styles.radio} text={text.payDebit} selected />
            <RadioButton style={styles.radio} text={text.payOther} />
          </View>

          <View style={styles.body}>
            <Button
              labelStyle={styles.buttonLabel}
              containerStyle={styles.button}
              label={text.buttonCancel}
              buttonType="danger"
              rounded
              onPress={() => {}}
            />
            <Button
              labelStyle={styles.buttonLabel}
              containerStyle={styles.button}
              label={text.buttonConfirm}
              buttonType="primary"
              rounded
              onPress={() => navigation.navigate('SuccessPurchase')}
            />
          </View>
        </ScrollView>
      </SafeAreaView>
    </>
  );
};

const text = {
  buttonConfirm: 'Comprar',
  buttonCancel: 'Cancelar',
  confirm: 'Confirmar compra',
  payDebit: 'Tarjeta terminada en 1234',
  payOther: 'Nuevo método de pago',
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#e9fafb',
    height: '100%',
    paddingTop: 50,
  },
  logoContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    width: '50%',
    height: undefined,
    aspectRatio: 1,
    margin: 20,
  },
  body: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 30,
    flexDirection: 'row',
  },
  button: {
    width: '40%',
    justifyContent: 'center',
    alignItems: 'center',
    margin: 10,
  },
  buttonLabel: {
    fontSize: 25,
  },
  confirmText: {
    fontSize: 35,
    margin: 20,
    textAlign: 'center',
    textDecorationLine: 'underline',
  },
  itemName: {
    fontSize: 30,
  },
  itemPrice: {
    fontSize: 25,
  },
  radioGroup: {
    marginTop: 22,
    marginLeft: 35,
  },
  radio: {
    marginTop: 15,
  },
});

export default Purchase;
