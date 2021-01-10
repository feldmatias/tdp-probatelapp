import {StyleSheet, TouchableWithoutFeedback} from 'react-native';
import React, {useState} from 'react';
import Video from 'react-native-video';
import GestureRecognizer, {swipeDirections} from 'react-native-swipe-gestures';

const Probador = ({navigation}) => {
  const [video, setVideo] = useState(null);
  const [running, setRunning] = useState(false);

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
          source={require('./Probador_virtual.mp4')}
          ref={(ref) => {
            setVideo(ref);
          }}
          style={styles.video}
          resizeMode={'stretch'}
          muted={true}
          paused={!running}
          onLoad={() => video.seek(0.01)}
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
