import React, {useState, useEffect} from 'react';
import {StyleSheet, View, ActivityIndicator, Text} from 'react-native';

const RecommenderConfirm = ({navigation}) => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!loading) {
      return;
    }
    setTimeout(() => {
      setLoading(false);
    }, 5000);
  });

  const loadingComponent = () => {
    return (
      <View style={styles.loading}>
        <ActivityIndicator size="large" color="#1c7dd6" />
        <Text style={styles.loadingText}>{text.loading}</Text>
      </View>
    );
  };
  const confirmComponent = () => {
    return (
      <View style={styles.loading}>
        <Text style={styles.loadingText}>aca mostrar foto de la prenda</Text>
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
    fontSize: 20,
  },
});

export default RecommenderConfirm;
