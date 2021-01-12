import React from 'react';
import {
  Image,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';

const SuccessBuy = ({navigation}) => {
  return (
    <>
      <SafeAreaView style={styles.container}>
        <ScrollView contentInsetAdjustmentBehavior="automatic">
          <View style={styles.logoContainer}>
            <Image style={styles.logo} source={require('./thanks.png')} />
          </View>
          <View style={styles.shipmentContainer}>
            <Image
              style={styles.shipmentIcon}
              source={require('./shipment.png')}
            />
            <Text style={styles.shipment}>{text.shipment}</Text>
          </View>
        </ScrollView>
      </SafeAreaView>
    </>
  );
};

const text = {
  shipment: 'El pedido llegará pronto',
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
    width: '90%',
    height: undefined,
    aspectRatio: 2,
    margin: 10,
    marginTop: '40%',
  },
  shipmentContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    marginTop: 20,
  },
  shipmentIcon: {
    width: 70,
    height: 70,
  },
  shipment: {
    fontSize: 22,
    marginLeft: 18,
  },
});

export default SuccessBuy;
