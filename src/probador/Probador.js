import {Image, StyleSheet} from 'react-native';
import React, {useState} from 'react';
import Video from 'react-native-video';
import GestureRecognizer from 'react-native-swipe-gestures';
import Button from 'react-native-bootstrap-buttons';
import ActionButton from 'react-native-action-button';

const Probador = ({route, navigation}) => {
  let video = null;
  const [running, setRunning] = useState(false);
  const [stepNumber, setStepNumber] = useState(0);
  const {isRecommender} = route.params;
  const startTimeProbador = 1.8;
  const stepsProbador = [13.7, 17.2, 30.6, 35]; // in seconds
  const startTimeRecommender = 0;
  const stepsRecommender = [1.5, 4.52, 7.1, 10.9, 999]; // in seconds

  const startTime = () =>
    isRecommender ? startTimeRecommender : startTimeProbador;
  const steps = () => (isRecommender ? stepsRecommender : stepsProbador);

  const source = () =>
    isRecommender
      ? require('./recommender.mp4')
      : require('./probador_virtual.mp4');

  const checkTime = (currentTime) => {
    if (currentTime >= steps()[stepNumber]) {
      setStepNumber(stepNumber + 1);
      setRunning(false);
    }
  };

  return (
    <>
      <GestureRecognizer
        onSwipe={(direction, state) => setRunning(true)}
        // onSwipeUp={(state) => this.onSwipeUp(state)}
        // onSwipeDown={(state) => this.onSwipeDown(state)}
        // onSwipeLeft={(state) => this.onSwipeLeft(state)}
        // onSwipeRight={(state) => this.onSwipeRight(state)}
        config={{
          velocityThreshold: 0.3,
          directionalOffsetThreshold: 80,
        }}>
        <Video
          source={source()}
          ref={(ref) => {
            video = ref;
          }}
          style={styles.video}
          resizeMode={'stretch'}
          muted={true}
          paused={!running}
          onLoad={() => video.seek(startTime())}
          onProgress={({currentTime}) => checkTime(currentTime)}
        />
      </GestureRecognizer>

      <Button
        labelStyle={styles.buttonLabel}
        containerStyle={{...styles.button, ...styles.buttonClose}}
        label={'X'}
        buttonType="danger"
        onPress={() => {}}
      />
      <Button
        labelStyle={styles.buttonLabel}
        containerStyle={{...styles.button, ...styles.buttonSuccess}}
        label={'√'}
        buttonType="success"
        onPress={() => {
          navigation.navigate('Purchase', {
            isRecommender: isRecommender,
          });
        }}
      />
      {isRecommender ? (
        <ActionButton
          buttonColor={'rgba(28,125,214,1)'}
          position={'center'}
          size={75}
          offsetY={20}
          renderIcon={() => (
            <Image
              style={styles.actionButtonIcon}
              source={require('./actions/person.png')}
            />
          )}>
          <ActionButton.Item
            buttonColor={'rgba(28,85,200,1)'}
            title=""
            size={65}
            onPress={() => setRunning(true)}>
            <Image
              style={styles.actionButtonIcon}
              source={require('./actions/piernas.png')}
            />
          </ActionButton.Item>
          <ActionButton.Item
            buttonColor={'rgba(28,85,200,1)'}
            title=""
            size={65}
            onPress={() => setRunning(true)}>
            <Image
              style={styles.actionButtonIcon}
              source={require('./actions/caminar.png')}
            />
          </ActionButton.Item>
          <ActionButton.Item
            buttonColor={'rgba(28,85,200,1)'}
            title=""
            size={65}
            onPress={() => setRunning(true)}>
            <Image
              style={styles.actionButtonIcon}
              source={require('./actions/trotar.png')}
            />
          </ActionButton.Item>
          <ActionButton.Item
            buttonColor={'rgba(28,85,200,1)'}
            title=""
            size={65}
            onPress={() => setRunning(true)}>
            <Image
              style={styles.actionButtonIcon}
              source={require('./actions/sentarse.png')}
            />
          </ActionButton.Item>
        </ActionButton>
      ) : null}
    </>
  );
};

const styles = StyleSheet.create({
  video: {
    width: '100%',
    height: '100%',
  },
  button: {
    margin: 20,
    position: 'absolute',
    width: 60,
    height: 60,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonClose: {
    bottom: 0,
    left: 0,
  },
  buttonSuccess: {
    bottom: 0,
    right: 0,
  },
  buttonLabel: {
    fontSize: 35,
    fontWeight: 'bold',
    color: 'white',
  },
  actionButtonIcon: {
    width: 35,
    height: 50,
  },
});

export default Probador;
