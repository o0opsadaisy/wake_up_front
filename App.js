// import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, View, TouchableOpacity } from 'react-native';
// import { Audio } from 'expo-av';
import SoundPlayer from 'react-native-sound-player';
import VolumeManager from 'react-native-volume-manager';


import React, { useState, useRef } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { RNCamera } from 'react-native-camera';

//////////////////////////////////////////////////////////////

export default function App() {

  // const App = () => {
  //   const cameraRef = useRef(null);
  //   const [isRecording, setIsRecording] = useState(false);
  //   const takePicture = async () => {
  //     if (cameraRef.current) {
  //       const options = { quality: 0.5, base64: true };
  //       const data = await cameraRef.current.takePictureAsync(options);
  //       console.log(data.uri);
  //     }
  //   };

//////////////////////////////////////////////////////////////

  const [volume, setVolume] = useState(0.5);

  const setSystemVolume = (newVolume) => {
    VolumeManager.setVolume(newVolume);
    setVolume(newVolume);
  };

  const playSound = () => {
    try {
      SoundPlayer.playAsset('./source/alarm-1-with-reverberation.mp3');
    } catch (e) {
      console.log('오디오를 재생할 수 없습니다: ', e);
    }
  };

  const Button1_Sound = () => {
    setSystemVolume(0.5);
    playSound();
  };

  const Button2_Sound = () => {
    setSystemVolume(1.0);
    playSound();
  };

  // async function Button1_Sound({volume=0.1}) {
  //   const {sound} = await Audio.Sound.createAsync( 
  //     require('./source/red-alert_nuclear_buzzer.mp3'),
  //   );
  //   await sound.setVolumeAsync(volume);
  //   await sound.playAsync();
  // }

  // async function Button2_Sound({volume=1.0}) {
  //   const {sound} = await Audio.Sound.createAsync( 
  //     require('./source/alarm-1-with-reverberation.mp3'),
  //   );
  //   await sound.setVolumeAsync(volume);
  //   await sound.playAsync();
  // }

  return (
    <View style={styles.container}>
      <RNCamera>
        ref={cameraRef}

      </RNCamera>


      <View style={styles.buttonview}>
        <TouchableOpacity
          style = {styles.button}
          onPress={Button1_Sound}>
            <Text style = {styles.buttontext}>
              [졸음감지]
            </Text>
        </TouchableOpacity>

        <TouchableOpacity 
          style = {styles.button}
          onPress={Button2_Sound}>
            <Text style = {styles.buttontext}>
              [교통사고위험지역 내 졸음감지]
            </Text>
        </TouchableOpacity>
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonview: {
    flexDirection: 'row',
    borderColor : 'black'
  },
  button: {
    flexDirection: 'row',
    backgroundColor: 'red',
    justifyContent: 'space-around',
    borderRadius: 5,
    padding: 10,
    margin: 15,
  },
  buttontext: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'black',
  }
});
