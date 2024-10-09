import React, { useState } from 'react';
import { Image, StyleSheet, Platform, View, Button, Text, Modal } from 'react-native';
import { HelloWave } from '@/components/HelloWave';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import FontAwesome from '@expo/vector-icons/FontAwesome'; // FontAwesome 아이콘 추가

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

      {/* 졸음 감지 모달 */}
      <Modal visible={isSleepModalVisible} transparent={true} animationType="slide">
        <View style={styles.modalOverlay}>
          <View style={styles.modalContent}>
            <View style={styles.iconContainer}>
              {/* FontAwesome 아이콘 */}
              <FontAwesome name="warning" size={50} color="#FFD700" />
            </View>
            <View style={styles.textContainer}>
              <Text style={styles.modalWarningText1}>WARNING</Text>
              <Text style={styles.modalDetectText}>졸음 감지</Text>
            </View>
            <Button title="닫기" onPress={toggleSleepModal} />
          </View>
        </View>
      </Modal>

      {/* 사고다발구간에서 졸음 감지 모달 */}
      <Modal visible={isDangerModalVisible} transparent={true} animationType="slide">
        <View style={styles.modalOverlay}>
          <View style={styles.modalContent}>
            <View style={styles.iconContainer}>
              {/* FontAwesome 아이콘 */}
              <FontAwesome name="warning" size={50} color="red" />
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