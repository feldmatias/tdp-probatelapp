import React from 'react';
import {StyleSheet, TouchableOpacity, View, Text} from 'react-native';
import {RNCamera} from 'react-native-camera';
import Icon from 'react-native-ionicons';

const Recommender = ({navigation}) => {
  let camera;
  const onCapture = () => {
    navigation.navigate('RecommenderConfirm');
  };
  return (
    <>
      <View style={styles.container}>
        <Text style={styles.text}>{text.title}</Text>
        <RNCamera
          ref={(ref) => {
            camera = ref;
          }}
          style={styles.camera}
          type={RNCamera.Constants.Type.back}
          flashMode={RNCamera.Constants.FlashMode.off}
          captureAudio={false}
          androidCameraPermissionOptions={{
            title: 'Permission to use camera',
            message: 'We need your permission to use your camera',
            buttonPositive: 'Ok',
            buttonNegative: 'Cancel',
          }}
        />

        <View style={styles.cameraButtons}>
          <TouchableOpacity onPress={() => {}}>
            <Icon name={'md-flash-off'} color="white" size={40} />
          </TouchableOpacity>
          <TouchableOpacity onPress={onCapture}>
            <View style={[styles.captureBtn]} />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => {}}>
            <Icon name="md-reverse-camera" color="white" size={40} />
          </TouchableOpacity>
        </View>
      </View>
    </>
  );
};

const text = {
  title: 'Tomá una foto de tu prenda!',
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#e9fafb',
    height: '100%',
  },
  text: {
    position: 'absolute',
    top: 0,
    paddingVertical: 20,
    zIndex: 999,
    textAlign: 'center',
    width: '100%',
    fontSize: 27,
    fontWeight: 'bold',
    color: 'white',
    backgroundColor: 'rgba(10,10,10,0.6)',
  },
  camera: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  cameraButtons: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    position: 'absolute',
    bottom: 50,
    width: '100%',
    alignItems: 'center',
  },
  captureBtn: {
    width: 80,
    height: 80,
    borderWidth: 3,
    borderRadius: 60,
    borderColor: '#FFFFFF',
  },
});

export default Recommender;
