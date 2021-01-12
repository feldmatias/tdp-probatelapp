import {StyleSheet} from 'react-native';
import React, {useState} from 'react';
import Video from 'react-native-video';
import GestureRecognizer from 'react-native-swipe-gestures';

const Probador = ({navigation}) => {
  const [video, setVideo] = useState(null);
  const [running, setRunning] = useState(false);
  const [stepNumber, setStepNumber] = useState(0);
  const steps = [13.7, 17.2, 30.6, 35]; // in seconds

  const checkTime = (currentTime) => {
    if (currentTime >= steps[stepNumber]) {
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
          source={require('./probador_virtual.mp4')}
          ref={(ref) => {
            setVideo(ref);
          }}
          style={styles.video}
          resizeMode={'stretch'}
          muted={true}
          paused={!running}
          onLoad={() => video.seek(0.01)}
          onProgress={({currentTime}) => checkTime(currentTime)}
        />
      </GestureRecognizer>
    </>
  );
};

const styles = StyleSheet.create({
  video: {
    width: '100%',
    height: '100%',
  },
});

export default Probador;
