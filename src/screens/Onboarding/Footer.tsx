import { StackNavigationProp } from '@react-navigation/stack';
import React from 'react';
import { View, Text, Pressable } from 'react-native';
import styles from './styles';

type RootStackParamList = {
  Onboarding: undefined;
  Home: undefined;
};

type OnboardingScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  'Onboarding'
>;

type FooterProps = {
  currentSlideIndex: number;
  slides: { id: string; image: any; title: string; subTitle: string }[];
  skip: () => void;
  goToNextSlide: () => void;
  navigation: OnboardingScreenNavigationProp;
};

const Footer = ({
  currentSlideIndex,
  slides,
  skip,
  goToNextSlide,
  navigation,
}: FooterProps) => {
  return (
    <View style={styles.footerContainer}>
      <View style={styles.indicatorContainer}>
        {slides.map((_, index) => (
          <View
            key={index}
            style={[
              styles.indicator,
              currentSlideIndex === index && styles.indicatorActice,
            ]}
          />
        ))}
      </View>

      <View style={styles.buttonContainer}>
        {currentSlideIndex === slides.length - 1 ? (
          <View style={styles.lastButtonContainer}>
            <Pressable
              style={({ pressed }) => [
                styles.btn,
                pressed && { transform: [{ scale: 0.95 }] },
              ]}
              onPress={() => navigation.replace('Home')}>
              <Text style={styles.getStartedText}>Get Started</Text>
            </Pressable>
          </View>
        ) : (
          <View style={styles.row}>
            <Pressable
              style={({ pressed }) => [
                styles.btn,
                styles.skipButton,
                pressed && { transform: [{ scale: 0.95 }] },
              ]}
              onPress={skip}>
              <Text style={styles.skipText}>Skip</Text>
            </Pressable>
            <Pressable
              onPress={goToNextSlide}
              style={({ pressed }) => [
                styles.btn,
                pressed && { transform: [{ scale: 0.95 }] },
              ]}>
              <Text style={styles.nextText}>Next</Text>
            </Pressable>
          </View>
        )}
      </View>
    </View>
  );
};

export default Footer;