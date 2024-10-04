import React, { useState } from 'react';
import { Image, StyleSheet, Platform, View, Button, Text, Modal } from 'react-native';
import { HelloWave } from '@/components/HelloWave';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';

export default function HomeScreen() {
  // 모달 상태 관리
  const [isSleepModalVisible, setSleepModalVisible] = useState(false);
  const [isDangerModalVisible, setDangerModalVisible] = useState(false);

  // 졸음 감지 모달 열기/닫기
  const toggleSleepModal = () => {
    setSleepModalVisible(!isSleepModalVisible);
  };

  // 사고다발구간에서 졸음 감지 모달 열기/닫기
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

      {/* 팝업을 제어할 버튼들 */}
      <ThemedView style={styles.buttonContainer}>
        {/* 졸음 감지 버튼 */}
        <Button title="졸음 감지" onPress={toggleSleepModal} />
        
        {/* 사고다발구간에서 졸음 감지 버튼 */}
        <Button title="사고다발구간에서 졸음 감지" onPress={toggleDangerModal} />
      </ThemedView>

      {/* 졸음 감지 모달 */}
      <Modal visible={isSleepModalVisible} transparent={true} animationType="slide">
        <View style={styles.modalOverlay}>
          <View style={styles.modalContent}>
            <Text>졸음이 감지되었습니다!</Text>
            <Button title="닫기" onPress={toggleSleepModal} />
          </View>
        </View>
      </Modal>

      {/* 사고다발구간에서 졸음 감지 모달 */}
      <Modal visible={isDangerModalVisible} transparent={true} animationType="slide">
        <View style={styles.modalOverlay}>
          <View style={styles.modalContent}>
            <Text>사고다발구간에서 졸음이 감지되었습니다!</Text>
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
  },
});
