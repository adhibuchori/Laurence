import React from 'react';
import { StatusBar } from 'react-native';
import styles from './styles';
import { Text, View } from 'tamagui';
import AppLogo from '../../../assets/icons/laurence_app_logo.svg';

function SplashScreen() {
  return (
    <View style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor="white" />
      <View style={styles.contentContainer}>
        <AppLogo style={styles.logo} />
        <Text style={styles.title}>Laurence</Text>
        <Text style={styles.subTitle}>
          Adopt a pet and give them the freedom they deserve.
        </Text>
      </View>
      <Text style={styles.footer}>© adhibuchori Personal Project 2025</Text>
    </View>
  );
}

export default SplashScreen;
