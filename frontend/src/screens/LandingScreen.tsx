import React from 'react';
import { View, Text, Image, TouchableOpacity, SafeAreaView } from 'react-native';
import styles from '../styles/LandingScreen.styles';
import CommonButton from '../components/CommonButton';

export default function LandingScreen() {
  const handleGuestPress = () => {
    console.log('게스트로 시작하기');
    // TODO: 게스트 로직 구현
  };

  const handleLoginPress = () => {
    console.log('로그인');
    // TODO: 로그인 로직 구현
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <Image
          source={require('../../assets/ballsulog.png')}
          style={styles.logo}
          resizeMode="contain"
          accessibilityLabel="ballsulog 로고"
        />
        <Text style={styles.title}>ballsulog</Text>
        <View style={styles.buttonGroup}>
          <CommonButton
            title="게스트로 시작하기"
            onPress={handleGuestPress}
            variant="secondary"
          />
          <CommonButton
            title="로그인"
            onPress={handleLoginPress}
            variant="primary"
            style={{ marginBottom: 0 }}
          />
        </View>
      </View>
    </SafeAreaView>
  );
} 