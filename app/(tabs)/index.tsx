import React, { useState } from 'react';
import Svg, { Path } from 'react-native-svg';
import { Image, StyleSheet, Platform, View, Button, Text, Modal } from 'react-native';
import { HelloWave } from '@/components/HelloWave';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';

export const ExclamationTriangleFillIcon = ({ color = 'currentColor' }) => {
  return (
    <Svg width="50" height="50" fill={color} viewBox="0 0 16 16">
      <Path d="M8.982 1.566a1.13 1.13 0 0 0-1.96 0L.165 13.233c-.457.778.091 1.767.98 1.767h13.713c.889 0 1.438-.99.98-1.767zM8 5c.535 0 .954.462.9.995l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 5.995A.905.905 0 0 1 8 5m.002 6a1 1 0 1 1 0 2 1 1 0 0 1 0-2"/>
    </Svg>
  );
};

export default function HomeScreen() {
  const [isSleepModalVisible, setSleepModalVisible] = useState(false);
  const [isDangerModalVisible, setDangerModalVisible] = useState(false);

  const toggleSleepModal = () => {
    setSleepModalVisible(!isSleepModalVisible);
  };

  const toggleDangerModal = () => {
    setDangerModalVisible(!isDangerModalVisible);
  };

  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: '#A1CEDC', dark: '#1D3D47' }}
      headerImage={
        <Image
          source={require('@/assets/images/partial-react-logo.png')}
          style={styles.reactLogo}
        />
      }>
      <ThemedView style={styles.titleContainer}>
        <ThemedText type="title">안녕하세요!</ThemedText>
        <HelloWave />
      </ThemedView>

      <ThemedView style={styles.buttonContainer}>
        <Button title="졸음 감지" onPress={toggleSleepModal} />
        <Button title="사고다발구간에서 졸음 감지" onPress={toggleDangerModal} />
      </ThemedView>

      <Modal visible={isSleepModalVisible} transparent={true} animationType="slide">
        <View style={styles.modalOverlay}>
          <View style={styles.modalContent}>
            <View style={styles.iconContainer}>
              {/* 노란색 아이콘 */}
              <ExclamationTriangleFillIcon color="#FFD700" />
            </View>
            <View style={styles.textContainer}>
              <Text style={styles.modalWarningText1}>WARNING</Text>
              <Text style={styles.modalDetectText}>졸음 감지</Text>
            </View>
            <Button title="닫기" onPress={toggleSleepModal} />
          </View>
        </View>
      </Modal>

      <Modal visible={isDangerModalVisible} transparent={true} animationType="slide">
        <View style={styles.modalOverlay}>
          <View style={styles.modalContent}>
            <View style={styles.iconContainer}>
              {/* 빨간색 아이콘 */}
              <ExclamationTriangleFillIcon color="red" />
            </View>
            <View style={styles.textContainer}>
              <Text style={styles.modalWarningText2}>DANGER</Text>
              <Text style={styles.modalDetectText}>사고다발구간에서 졸음 감지</Text>
            </View>
            <Button title="닫기" onPress={toggleDangerModal} />
          </View>
        </View>
      </Modal>

      <ThemedView style={styles.stepContainer}>
        <ThemedText type="subtitle">Step 1: Try it</ThemedText>
        <ThemedText>
          Edit <ThemedText type="defaultSemiBold">app/(tabs)/index.tsx</ThemedText> to see changes.
          Press{' '}
          <ThemedText type="defaultSemiBold">
            {Platform.select({ ios: 'cmd + d', android: 'cmd + m' })}
          </ThemedText>{' '}
          to open developer tools.
        </ThemedText>
      </ThemedView>

      <ThemedView style={styles.stepContainer}>
        <ThemedText type="subtitle">Step 2: Explore</ThemedText>
        <ThemedText>
          Tap the Explore tab to learn more about what's included in this starter app.
        </ThemedText>
      </ThemedView>

      <ThemedView style={styles.stepContainer}>
        <ThemedText type="subtitle">Step 3: Get a fresh start</ThemedText>
        <ThemedText>
          When you're ready, run{' '}
          <ThemedText type="defaultSemiBold">npm run reset-project</ThemedText> to get a fresh{' '}
          <ThemedText type="defaultSemiBold">app</ThemedText> directory. This will move the current{' '}
          <ThemedText type="defaultSemiBold">app</ThemedText> to{' '}
          <ThemedText type="defaultSemiBold">app-example</ThemedText>.
        </ThemedText>
      </ThemedView>
    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
  reactLogo: {
    height: 178,
    width: 290,
    bottom: 0,
    left: 0,
    position: 'absolute',
  },
  buttonContainer: {
    marginTop: 20,
    paddingHorizontal: 20,
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  modalOverlay: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 10,
    alignItems: 'center',
    width: 400,
    height: 200, // 높이를 충분히 설정
    justifyContent: 'center',
  },
  iconContainer: {
    position: 'absolute', // 아이콘을 텍스트와 별도로 배치
    left: 30,
    top: '60%', // 상하 중앙 정렬
    transform: [{ translateY: -20 }], // 상하 중앙 정렬을 정확히 맞추기 위해 변환
  },
  textContainer: {
    alignItems: 'center',
    marginBottom: 20,
  },
  modalWarningText1: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#FFD700',
    marginBottom: 10,
  },
  modalWarningText2: {
    fontSize: 30,
    fontWeight: 'bold',
    color: 'red',
    marginBottom: 10,
  },
  modalDetectText: {
    fontSize: 20,
    
    color: '#000000',
  },
  modalButton: {
    backgroundColor: '#FF6347',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    marginTop: 20,
  },
  modalButtonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
});