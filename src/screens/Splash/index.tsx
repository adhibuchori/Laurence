import React, { useEffect, useState } from 'react';
import { StatusBar, Animated } from 'react-native';
import styles from './styles';
import { Text, View } from 'tamagui';
import AppLogo from '../../../assets/icons/laurence_app_logo.svg';
import { StackNavigationProp } from '@react-navigation/stack';

type RootStackParamList = {
  Splash: undefined;
  Onboarding: undefined;
};

type SplashScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  'Onboarding'
>;

interface Props {
  readonly navigation: SplashScreenNavigationProp;
}

function SplashScreen({ navigation }: Props) {
  const [fadeAnim] = useState(new Animated.Value(0));

  useEffect(() => {
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 500,
      useNativeDriver: true,
    }).start();

    const timer = setTimeout(() => {
      navigation.replace('Onboarding');
    }, 2000);

    return () => clearTimeout(timer);
  }, [fadeAnim, navigation]);

  return (
    <View style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor="white" />
      <Animated.View style={[styles.contentContainer, { opacity: fadeAnim }]}>
        <AppLogo style={styles.logo} />
        <Text style={styles.title}>Laurence</Text>
        <Text style={styles.subTitle}>
          Adopt a pet and give them the freedom they deserve.
        </Text>
      </Animated.View>
      <Text style={styles.footer}>© adhibuchori Personal Project 2025</Text>
    </View>
  );
}

export default SplashScreen;
