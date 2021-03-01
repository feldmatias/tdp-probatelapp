import React, {useEffect, useState} from 'react';
import {ActivityIndicator, Image, StyleSheet, Text, View} from 'react-native';
import {
  selectedCatalogItem,
  selectedRecommendedItem,
} from '../catalog/items/catalog_items';
import Button from 'react-native-bootstrap-buttons';

const RecommenderConfirm = ({navigation}) => {
  const [loading, setLoading] = useState(true);

  const time_to_load = 5000;

  useEffect(() => {
    if (!loading) {
      return;
    }
    setTimeout(() => {
      setLoading(false);
    }, time_to_load);
  });

  const loadingComponent = () => {
    return (
      <View style={styles.loading}>
        <ActivityIndicator size={70} color="#1c7dd6" />
        <Text style={styles.loadingText}>{text.loading}</Text>
      </View>
    );
  };
  const confirmComponent = () => {
    return (
      <View>
        <Text style={styles.confirmText}>{text.recommended}</Text>
        <View style={styles.logoContainer}>
          <Image style={styles.logo} source={selectedRecommendedItem.image} />
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
            onPress={() =>
              navigation.navigate('Catalog', {
                isRecommender: true,
              })
            }
          />
        </View>
      </View>
    );
  };
  return (
    <>
      <View style={styles.container}>
        {loading ? loadingComponent() : confirmComponent()}
      </View>
    </>
  );
};

const text = {
  loading: 'Detectando prendas...',
  recommended: 'Detectamos esta prenda:',
  buttonConfirm: 'Aceptar',
  buttonCancel: 'Cancelar',
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#e9fafb',
    height: '100%',
    width: '100%',
  },
  loading: {
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  loadingText: {
    fontSize: 30,
  },
  logoContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    width: '50%',
    height: undefined,
    aspectRatio: 1.26,
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
    marginTop: 90,
    marginBottom: 5,
    textAlign: 'center',
    textDecorationLine: 'underline',
  },
});

export default RecommenderConfirm;
